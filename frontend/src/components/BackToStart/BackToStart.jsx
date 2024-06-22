import { Link } from "react-router-dom";
import "./BackToStart.css";

const BackToStart = () => {
    return (
        <section className="backtostart-btn">
            <i class="fa-solid fa-reply-all"></i>
            <Link to={"/"}><p className="backtostart">ZURÜCK ZUR STARTSEITE</p></Link>
        </section>
    );
}
 
export default BackToStart;