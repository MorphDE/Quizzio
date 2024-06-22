import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import "./Changelog.css";
import BackToStart from './../../components/BackToStart/BackToStart';

const Changelog = () => {

    const pageTitle = "CHANGELOG";

    return (
        <>
        <HeaderTwo title={pageTitle}/>
        <section className="changelog-container">
            <div className="changelog-content">
                <div className="changes">
                    <h1 className="changelog-title">Neuste Änderungen</h1>
                    <p className="changelog-text white-color">Es wurden gewisse Änderungen am aktuellen Design vorgenommen <i class="fa-solid fa-check"></i></p>
                    <p className="changelog-text white-color">Die Benachrichtigungen innerhalb der App wurde angepasst <i class="fa-solid fa-check"></i></p>
                    <p className="changelog-text white-color">Der Registrierungsvorgang wurde verbessert <i class="fa-solid fa-check"></i></p>
                    <p className="changelog-text white-color">Der Login Prozess wurde verbessert <i class="fa-solid fa-check"></i></p>
                    <p className="changelog-text white-color">Es wurde eine automatische Weiterleitung nach der Registrierung zur Login Seite hinzugefügt <i class="fa-solid fa-check"></i></p>
                </div>
                <hr/>
                <div className="upcoming">
                    <h1 className="changelog-title">Bald verfügbar</h1>
                    <p className="changelog-text grey-color">Es kommen neue Statistiken für die einzelnen Kategorien <i class="fa-solid fa-xmark"></i></p>
                    <p className="changelog-text grey-color">Wenn eine falsche Frage beim Quiz ausgewählt wurde, wird in Zukunft die richtige markiert <i class="fa-solid fa-xmark"></i></p>
                    <p className="changelog-text grey-color">Es folgt eine Profilseite für Nutzer <i class="fa-solid fa-xmark"></i></p>
                    <p className="changelog-text grey-color">Bald wird es ein Multiple Choice Quiz geben <i class="fa-solid fa-xmark"></i></p>
                    <p className="changelog-text grey-color">In Zukunft können Fragen nur noch von Administratoren erstellt und bearbeitet werden <i class="fa-solid fa-xmark"></i></p>
                </div>
            </div>
            <BackToStart/>
        </section>
        </>  
    );
}
 
export default Changelog;