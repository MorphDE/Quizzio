import express from "express";
import cors from "cors";
import { connectToDatabase } from "./models/index.js";
import { QuestionRouter } from "./routes/question-routes.js";
import { CategoriesRouter } from "./routes/categories-routes.js";
import { UsersRouter } from "./routes/users-route.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

// async function sendMail() {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken()

//     const transport = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'tobiastischer99@gmail.com',
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken
//       }
//     })

//     const mailOptions = {
//       from: 'QUIZZIO APP <tobiastischer99@gmail.com>',
//       to: 'tobiastischer99@gmail.com',
//       subject: 'Hello from GMAIL using API',
//       text: 'Hello from QUIZZIO APP',
//       html: '<h1>Hello from QUIZZIO APP</h1>'
//     };

//     const result = await transport.sendMail(mailOptions)
//     return result;
//   }

// sendMail().then( result => console.log( 'Email sent...', result ))
// .catch(error => console.log(error.message));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/questions", QuestionRouter);
app.use("/api/v1/categories", CategoriesRouter);
app.use("/api/v1/users", UsersRouter);


//Frontend shit
const path = require('path');
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use((req, res, next) => {
  if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
    next();
  } else {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.sendFile(path.join(__dirname, '../', 'frontend', 'index.html'));
  }
});

app.use(express.static('frontend'));

//

connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3006;
    app.listen(PORT, () => console.log("Server listening at port", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });