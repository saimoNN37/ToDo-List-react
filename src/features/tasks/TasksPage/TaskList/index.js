import { Item, List, Content, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { toogleTaskDone, removeTask, selecHideDone, selectTaskByQuery } from "../../taskSlice";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("szukaj");


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
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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