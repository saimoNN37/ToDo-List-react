import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toogleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toogleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task in tasks) {
                tasks[task].done = true;
            }
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSucces: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = true;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        }

    },
});

export const { addTask, toogleHideDone, toogleTaskDone, removeTask, setAllDone, fetchExampleTasks, fetchExampleTasksSucces, fetchExampleTasksError } = tasksSlice.actions;

const selecTasksState = state => state.tasks;

export const selecTasks = state => selecTasksState(state).tasks;
export const selecHideDone = state => selecTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selecTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selecTasks(state).lenght === 0;
export const selectLoading = state => selecTasks(state).loading;

export const getTaskById = (state, taskId) =>
    selecTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state, query) => {
    const tasks = selecTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;  