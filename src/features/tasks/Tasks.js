import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { selecTasks } from "./taskSlice";

function Tasks() {
  
  const { tasks } = useSelector(selecTasks)

  const {
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
