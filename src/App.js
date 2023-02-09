import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść kolację", done: true },
];

const hideDone = false;
function App() {
  return (
    <div>
      <Container>
        <Header title="Lista zadań" />
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section title="Lista zadań"
          body={<Tasks tasks={tasks} hideDone={hideDone} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />} />
      </Container>
    </div>
  );
}

export default App;
