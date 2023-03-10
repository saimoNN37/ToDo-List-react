import { useDispatch } from "react-redux";
import { StyledButtons } from "../../Button";
import { fetchExampleTasks } from "../../taskSlice";

const ExampleTaskButton = () => {
    const disPatch = useDispatch();

    return (
        <>
        <StyledButtons onClick={() => disPatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </StyledButtons>
        </>
    )
};

export default ExampleTaskButton;