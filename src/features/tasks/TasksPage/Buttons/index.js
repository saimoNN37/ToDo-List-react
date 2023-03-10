import { ButtonList, StyledButtons } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toogleHideDone, setAllDone, selecHideDone, selectAreTasksEmpty, selectIsEveryTaskDone, fetchExampleTasks } from "../../taskSlice";



const Buttons = () => {
    const hideDone = useSelector(selecHideDone);
    const isEmptyTasks = useSelector(selectAreTasksEmpty);
    const allTaskDone = useSelector(selectIsEveryTaskDone);

    const disPatch = useDispatch();
    return (
        <ButtonList>
            <StyledButtons onClick={() => disPatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </StyledButtons>
            {!isEmptyTasks && (
                <>
                    <StyledButtons
                        onClick={() => disPatch(toogleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButtons>
                    <StyledButtons
                        disabled={allTaskDone}
                        onClick={() => disPatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </StyledButtons>
                </>
            )}
        </ButtonList>
    )
};

export default Buttons;