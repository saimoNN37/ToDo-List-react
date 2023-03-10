import { useDispatch, useSelector } from "react-redux";
import { StyledButtons } from "../../Button";
import { fetchExampleTasks, selectLoading } from "../../taskSlice";

const ExampleTaskButton = () => {
    const disPatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <>
            <StyledButtons disabled={loading} onClick={() => disPatch(fetchExampleTasks())}>
                {loading ? "Trwa ładowanie" : "Pobierz przykładowe zadanie"}
            </StyledButtons>
        </>
    )
};

export default ExampleTaskButton;