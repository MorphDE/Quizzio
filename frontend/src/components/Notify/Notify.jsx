import "./Notify.css";

const Notify = (props) => {

    return (
        <section className={`custom-notification ${props.error === true ? "notify-error" : "notify-success"}`}>
            {props.children}
        </section>
    );
}
 
export default Notify;