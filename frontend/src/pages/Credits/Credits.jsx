import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import "./Credits.css";
import BackToStart from './../../components/BackToStart/BackToStart';

const Credits = () => {

    const pageTitle = "APP CREDITS";

    return (
        <section className="credits-container">
            <HeaderTwo title={pageTitle}/>
            <div className="credits-content">
                <div className="credits-text">
                    <h1 className="credits-title">QUIZZIO INFORMATIONEN</h1>
                    <p className="credits-info">Quizzio ist eine Quiz App, in der unsere Nutzer die Möglichkeit haben, in die Fragenwelt einzutauchen und ihr Wissen auf die Probe zu stellen. Es gibt die Wahl zwischen mehreren Kategorien, sodass jeder Nutzer freie Wahl hat was für eine Art von Fragen er beantworten möchte. Zusätzlich gibt es auch Statistiken, die einem zeigen, wie viele Fragen man bereits beantwortet hat, und wie viele davon richtig oder falsch waren.</p>
                    <p className="credits-info">Wir arbeiten stetig an unserer App, um das Benutzererlebnis immer weiter zu verbessern. Eure Anregungen nehmen wir immer wieder mit auf, sodass unser Communityprojekt immer vielseitiger wird. Uns ist wichtig, dass all unsere Nutzer zufrieden sind, und gerne Quizzio spielen.</p>
                    <p className="credits-info">Wenn du Fragen, Anregungen, oder Probleme hast, kannst du dich gerne rund um die Uhr bei uns melden. Schreibe uns eine E-Mail an: contact@quizzio.de und erhalte erstklassigen Support.</p>
                </div>
            </div>
            <BackToStart/>
        </section>
    );
}
 
export default Credits;