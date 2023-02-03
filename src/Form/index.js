import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" placeholder="Co jest do zrobienia?" autoFocus />
        <button className="form__addButton">Dodaj zadanie</button>
    </form>
);

export default Form;