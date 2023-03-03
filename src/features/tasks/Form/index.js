import { useRef, useState } from "react";
import { StyledForm, AddButton, Input } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(!newTaskContent.trim() > 0) {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };


    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <AddButton>Dodaj zadanie</AddButton>
        </StyledForm>
    )
};

export default Form;