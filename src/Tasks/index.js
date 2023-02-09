import "./style.css";

const Tasks = ({tasks, hideDone, removeTask}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id} className={`tasks__list ${task.done && hideDone ? "tasks__list--hidden" : ""}`}
            >
                <button className="tasks__button tasks__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__taskName${task.done ? " tasks__taskName--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button" onClick={() => removeTask(task.id)}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;