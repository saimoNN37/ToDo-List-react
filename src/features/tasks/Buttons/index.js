import { ButtonList, StyledButtons } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selecTasks, toogleHideDone, setAllDone } from "../taskSlice";


const Buttons = () => {
    const { tasks, hideDone } = useSelector(selecTasks);
    const disPatch = useDispatch();
    return (
        tasks.length > 0 && (
            <ButtonList>
                <StyledButtons
                    onClick={() => disPatch(toogleHideDone())}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButtons>
                <StyledButtons
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => disPatch(setAllDone())}
                >
                    Ukończ wszystkie
                </StyledButtons>
            </ButtonList>
        )
    )
};

export default Buttons;