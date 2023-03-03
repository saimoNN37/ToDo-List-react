import { Item, List, Content, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { selecTasks, toogleTaskDone, removeTask } from "../taskSlice";

const TaskList = () =>{
    const {tasks, hideDone} = useSelector(selecTasks);
    const disPatch = useDispatch(); 

    return  (
        <List>
            {tasks.map(task => (
                <Item key={task.id} hidden={task.done && hideDone}>
                    <Button done onClick={() => disPatch(toogleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
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