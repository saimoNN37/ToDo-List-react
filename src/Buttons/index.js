import { ButtonList, StyledButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <ButtonList>
            <StyledButtons 
            onClick={toggleHideDone} 
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </StyledButtons>
            <StyledButtons
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </StyledButtons>
        </ButtonList>
    )
);

export default Buttons;