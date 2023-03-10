import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../Input";
import { addTask } from "../../taskSlice";
import { StyledForm, AddButton, } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const disPatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(!newTaskContent.trim() > 0) {
            return;
        }

        disPatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }))

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