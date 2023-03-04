import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
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
        }
    },
});

export const { addTask, toogleHideDone, toogleTaskDone, removeTask, setAllDone } = tasksSlice.actions;

const selecTasksState = state => state.tasks;

export const selecTasks = state => selecTasksState(state).tasks;
export const selecHideDone = state => selecTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selecTasks(state).every(({done}) => done);
export const selectAreTasksEmpty = state => selecTasksState(state).lenght === 0;



export default tasksSlice.reducer;  