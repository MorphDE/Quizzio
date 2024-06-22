import { useParams } from "react-router-dom";
import BackToStart from "../../components/BackToStart/BackToStart";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import "./Quiz.css";
import { useEffect, useState } from "react";
import { fetchWithToken } from "../../utils/FetchWithToken";
import { BACKEND_URL } from "../../utils/api";

const Quiz = () => {

    const { categoryId } = useParams();

    const [questionData, setQuestionData] = useState();

    const [clickedAnswer, setClickedAnswer] = useState(-1);

    const [correctAnswer , setCorrectAnswer] = useState(null);

    const pageTitle = "QUIZ"

    const getFetchQuestion = () => {
        if (categoryId) {
            fetchWithToken(`${BACKEND_URL}/api/v1/questions/quiz/${categoryId}`)
            .then(getInfo => getInfo.json())
            .then((info) => {
                setQuestionData(info)
            })
            .catch(() => console.log("Quests abrufen fehlgeschlagen!"));
        }
        setCorrectAnswer(null);
        setClickedAnswer(-1);
    }

    const fetchQuestionResult = (rightAnswer) => {
        fetchWithToken(`${BACKEND_URL}/api/v1/questions/addresult`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({questionId: questionData._id, questionResult: rightAnswer}),
        })
        .then(res => console.log(res))
        .catch((e) => console.log(e));
    }

    const checkAnswer = (choosenAnswer) => {
        if (clickedAnswer != -1) return;
        setClickedAnswer(choosenAnswer);
        if (questionData.antworten[choosenAnswer].ergebnis === true) {
            setCorrectAnswer(true)
            console.log("Deine Antwort war korrekt!");
            fetchQuestionResult(true);
        } else {
            setCorrectAnswer(false)
            console.log("Deine Antwort war falsch!");
            fetchQuestionResult(false);
        }
        setTimeout(() => {
            getFetchQuestion();
        }, 1500);
    } 

    useEffect(() => {
        getFetchQuestion();
    }, [])
    if (!questionData) {
        return "... Loading ..."
    }
    return (
        <section className="quiz-page">
            <HeaderTwo title={pageTitle}/>
            <div className="flex-wrap2">
                <div className="question-box2">
                    <p>{questionData.frage}</p>
                </div>
                <div className= { `answer-box2 ${clickedAnswer === 0 ? "answer-box2-clicked" : ""}` } onClick={() => checkAnswer(0)}>
                    <div className="answer-letter">
                        <p>A</p>
                    </div>
                        <p>{questionData.antworten[0].antwort}</p>
                </div>
                <div className= { `answer-box2 ${clickedAnswer === 1 ? "answer-box2-clicked" : ""}` } onClick={() => checkAnswer(1)}>
                    <div className="answer-letter">
                        <p>B</p>
                    </div>
                        <p>{questionData.antworten[1].antwort}</p>
                    </div>
                <div className= { `answer-box2 ${clickedAnswer === 2 ? "answer-box2-clicked" : ""}` } onClick={() => checkAnswer(2)}>
                    <div className="answer-letter">
                        <p>C</p>
                    </div>
                        <p>{questionData.antworten[2].antwort}</p>
                    </div>
                <div className= { `answer-box2 ${clickedAnswer === 3 ? "answer-box2-clicked" : ""}` } onClick={() => checkAnswer(3)}>
                    <div className="answer-letter">
                        <p>D</p>
                    </div>
                        <p>{questionData.antworten[3].antwort}</p>
                    </div>
                    {correctAnswer != null &&
                    <>
                        {correctAnswer === true ? 
                            <div className="answer-correct"> <p>DEINE ANTWORT WAR RICHTIG!</p> </div>
                            : <div className="answer-wrong"> <p>DEINE ANTWORT WAR FALSCH!</p> </div>
                        }
                    </>
                    }
            </div>
            <BackToStart/>
        </section>
    );
}
 
export default Quiz;