import { Item, List, Content, Button, StyledLink, } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { toogleTaskDone, removeTask, selecHideDone, selectTaskByQuery } from "../../taskSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";


const TaskList = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);


    const hideDone = useSelector(selecHideDone);
    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const disPatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item key={task.id} hidden={task.done && hideDone}>
                    <Button done onClick={() => disPatch(toogleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button remove onClick={() => disPatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;