import { useEffect, useState } from "react";
import BackToStart from "../../components/BackToStart/BackToStart";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import "./AllQuestions.css";
import { fetchWithToken } from "../../utils/FetchWithToken";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../utils/api";

const AllQuestion = () => {

    const pageTitle = "ALLE FRAGEN";
    const [allQuestions, setAllQuestions] = useState([]);

    useEffect(() => {
        fetchWithToken(`${BACKEND_URL}/api/v1/questions`)
        .then(getQuests => getQuests.json())
        .then((questions) => setAllQuestions(questions))
        .catch(() => console.log("Quests abrufen fehlgeschlagen!"));  
    }, [])

    return (
        <section className="all-questions">
            <HeaderTwo title={pageTitle}/>
            <div className="allquestions-container">
                <div className="scrollcontainer">
                    {allQuestions.map((questions, key) => (
                        <Link to={`/edit/${questions._id}`} key={key}>
                            <div className="orange-quest-box">
                                <p>{`[${key}] ${questions.frage}`}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <BackToStart/>
        </section>
    );
}
 
export default AllQuestion;