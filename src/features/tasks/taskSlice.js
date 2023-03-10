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
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

export const { addTask, toogleHideDone, toogleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks } = tasksSlice.actions;

const selecTasksState = state => state.tasks;

export const selecTasks = state => selecTasksState(state).tasks;
export const selecHideDone = state => selecTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selecTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selecTasks(state).lenght === 0;

export default tasksSlice.reducer;  