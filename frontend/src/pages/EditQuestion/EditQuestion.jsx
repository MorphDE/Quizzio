import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import BackToStart from "../../components/BackToStart/BackToStart";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import "./EditQuestion.css";
import Notify from "../../components/Notify/Notify";
import { fetchWithToken } from "../../utils/FetchWithToken";
import { BACKEND_URL } from "../../utils/api";

const EditQuestion = () => {
    const { id } = useParams();

    const [showNotification, setShowNotification] = useState(false);

    const mode = id ? "edit" : "create";

    let pageTitle;
    if (mode === "edit") {
        pageTitle = "FRAGE BEARBEITEN";
    } else {
        pageTitle = "FRAGE ERSTELLEN";
    }

    const emptyForm = {
        frage: "",
        kategorie: "",
        antworten: [
            {
                antwort: "",
                ergebnis: ""
            },
            {
                antwort: "",
                ergebnis: ""
            },
            {
                antwort: "",
                ergebnis: ""
            },
            {
                antwort: "",
                ergebnis: ""
            },
        ],
    }

    const [questionData, setQuestionData] = useState(emptyForm);

    const [categories, setCategories] = useState([]);

    const [rightAnswer, setRightAnswer] = useState(-1);

    useEffect(() => {
        fetchWithToken("http://localhost:3006/api/v1/categories")
        .then(getCategories => getCategories.json())
        .then((data) => setCategories(data))
        .catch(() => console.log("Kategorien abrufen fehlgeschlagen!"));  
    }, [])

    useEffect(() => {
        if (id) {
            fetchWithToken(`http://localhost:3006/api/v1/questions/${id}`)
            .then(getQuests => getQuests.json())
            .then((questions) => {
                setQuestionData(questions)
                const correctAnswer = questions.antworten.find(antwort => antwort.ergebnis === true)
                setRightAnswer(questions.antworten.indexOf(correctAnswer));
            })
            .catch(() => console.log("Quests abrufen fehlgeschlagen!"));
            }
    }, [id])

    const clearForm = () => {
         setQuestionData(emptyForm);
         setRightAnswer(-1);        
    }

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            let moreAnswers = questionData.antworten;
            moreAnswers.forEach(oneAnswer => {
                oneAnswer.ergebnis = false;
            });
            moreAnswers[rightAnswer].ergebnis = true;
            setQuestionData(prevState => ({...prevState, antworten: moreAnswers}))
            if (!id) {
                await fetchWithToken(`${BACKEND_URL}/api/v1/questions/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(questionData),
                });
                clearForm();
            } else {
                await fetchWithToken(`${BACKEND_URL}/api/v1/questions/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(questionData),
                });
            }
            setShowNotification(true); 
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updateAnswer = (index, value) => {
        let moreAnswers = questionData.antworten;
        let answer = moreAnswers[index];
        answer.antwort = value;
        setQuestionData(prevState => ({...prevState, antworten: moreAnswers}))
    }

    return (
        <section className="create-page">
            <HeaderTwo title={pageTitle} />
            <div className={showNotification ? "notify2-open" : "notify2-close"}>
                <Notify>
                    {id ? <p>Du hast die Frage erfolgreich bearbeitet.</p> : <p>Du hast erfolgreich eine neue Frage angelegt.</p>}
                </Notify>
            </div>
            <form className="create-question" onSubmit={handleUpdate}> 
                <input type="text" name="question" id="question" className="question-box" placeholder="Frage / Beschreibung" value={questionData.frage} onChange={(e) => setQuestionData(prevState => ({...prevState, frage: e.target.value}))}/>
                <input type="text" name="A" id="A" placeholder="Antwort A" value={questionData.antworten[0].antwort} onChange={(e) => updateAnswer(0, e.target.value)}/>
                <input type="text" name="B" id="B" placeholder="Antwort B" value={questionData.antworten[1].antwort} onChange={(e) => updateAnswer(1, e.target.value)}/>
                <input type="text" name="C" id="C" placeholder="Antwort C" value={questionData.antworten[2].antwort} onChange={(e) => updateAnswer(2, e.target.value)}/>
                <input type="text" name="D" id="D" placeholder="Antwort D" value={questionData.antworten[3].antwort} onChange={(e) => updateAnswer(3, e.target.value)}/>
                <select name="category" id="category" value={questionData.kategorie} onChange={(e) => setQuestionData(prevState => ({...prevState, kategorie: e.target.value}))}>
                    {!id && 
                    <option className="custom-select" value="0">Verfügbare Kategorien</option>}
                    {categories.map((cdata, key) => (
                        <option key={key} className="custom-select" value={cdata._id}>{cdata.name}</option>
                    ))}
                </select>
                <select name="answers" id="answers" value={rightAnswer} onChange={(e) => setRightAnswer(e.target.value)}>
                {!id &&
                    <option className="custom-select" value="-1">Richtige Antwort</option>}
                    {questionData.antworten.map((answers, key) => (
                        <option key={key} className="custom-select" value={key}>{answers.antwort}</option>
                    ))}
                </select>
                <button type="submit" className="btn-orange">{mode === "create" ? "FRAGE ERSTELLEN" : "FRAGE BEARBEITEN"}</button>
            </form>
            <BackToStart/>
        </section>
    );
}
 
export default EditQuestion;
