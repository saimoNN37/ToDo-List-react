import { useState } from "react";
import { StyledForm, AddButton, Input } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(!newTaskContent.trim() > 0) {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <AddButton>Dodaj zadanie</AddButton>
        </StyledForm>
    )
};

export default Form;