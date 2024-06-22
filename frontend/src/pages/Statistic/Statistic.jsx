import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import "./Statistic.css";
import BackToStart from './../../components/BackToStart/BackToStart';
import { useEffect, useState } from "react";
import { fetchWithToken } from "../../utils/FetchWithToken";
import { BACKEND_URL } from "../../utils/api";

const Statistic = () => {
    const pageTitle = "STATISTIK";

    const [questionCount, setQuestionCount] = useState();

    useEffect(() => {
        fetchWithToken(`${BACKEND_URL}/api/v1/questions`)
        .then(getQuests => getQuests.json())
        .then((questions) => setQuestionCount(questions.length))
        .catch(() => console.log("Quests abrufen fehlgeschlagen!"));  
    }, [])

    const [categoryCount, setCategoryCount] = useState();

    useEffect(() => {
        fetchWithToken(`${BACKEND_URL}/api/v1/categories`)
        .then(getCategoryAmount => getCategoryAmount.json())
        .then((data) => setCategoryCount(data.length))
        .catch(() => console.log("Kategorien abrufen fehlgeschlagen!"));  
    }, [])

    const [userStats, setUserStats] = useState({});

    useEffect(() => {
        fetchWithToken(`${BACKEND_URL}/api/v1/users/stats`)
        .then(getStats => getStats.json())
        .then((stats) => setUserStats(stats))
        .catch(() => console.log("Statistik abrufen fehlgeschlagen."));  
    }, [])

    const calculateStats = () => {
        const { rightAnswers, totalAnswers } = userStats;
        if (totalAnswers === 0) {
            return "/";
        } else {
        const calculatedStatistic = (rightAnswers / totalAnswers) * 100;
        return calculatedStatistic.toFixed(2) + "%";
    }
}

    return (
        <section className="statistic-page">
            <HeaderTwo title={pageTitle}/>
            <div className="flex-wrap">
                <div className="stats-btn">
                    <p className="stats-title">VERFÜGBARE FRAGEN <span style={{ color: "var(--main)", fontSize: "1.3rem" }}>{questionCount}</span></p>
                </div>
                <div className="stats-btn">
                    <p className="stats-title">VERFÜGBARE KATEGORIEN <span style={{ color: "var(--main)", fontSize: "1.3rem" }}>{categoryCount}</span></p>
                </div>
                <div className="stats-btn">
                    <p className="stats-title">FRAGEN BEANTWORTET <span style={{ color: "var(--main)", fontSize: "1.3rem" }}>{userStats.totalAnswers}</span></p>
                </div>
                <div className="stats-btn">
                    <p className="stats-title">RICHTIG BEANTWORTET <span style={{ color: "var(--main)", fontSize: "1.3rem" }}>{userStats.rightAnswers}</span></p>
                </div>
                <div className="stats-btn">
                    <p className="stats-title">FALSCH BEANTWORTET <span style={{ color: "var(--main)", fontSize: "1.3rem" }}>{userStats.wrongAnswers}</span></p>
                </div>
                <div className="stats-btn">
                    <p className="stats-title">ERFOLGSQUOTE <span style={{ color: "var(--main)", fontSize: "1.3rem" }}>{calculateStats()}</span></p>
                </div>
            </div>
            <BackToStart/>
        </section>
    );
}
 
export default Statistic;