import { useEffect, useState } from "react";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import Header from "../../components/Header/Header";
import "./Home.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import { fetchWithToken } from "../../utils/FetchWithToken";
import { BACKEND_URL } from "../../utils/api";

const Home = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [questionCount, setQuestionCount] = useState();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        fetchWithToken(`${BACKEND_URL}/api/v1/questions`)
        .then(getQuests => getQuests.json())
        .then((questions) => setQuestionCount(questions.length))
        .catch(() => console.log("Quests abrufen fehlgeschlagen!"));  
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
        <section className="home-page">
            <Header onBurgerMenuClick={toggleDropdown} />
            <div className={isDropdownOpen ? "dropdown-open" : "dropdown-close"}>
                <Dropdown />
            </div>
            <div className="home-stats">
                <div className="statistic">
                    <p className="stats-title">ERFOLG</p>
                    <h2 className="stats-info">{calculateStats()}</h2>
                </div>
                <div className="statistic">
                    <p className="stats-title">FRAGEN</p>
                    <h2 className="stats-info">{questionCount}</h2>
                </div>
            </div>
            <h1 className="category">WÄHLE DEINE KATEGORIE</h1>
            <CategoryButton/>
        </section>
    );
}
 
export default Home;