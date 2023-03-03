import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toogleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toogleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            const newItem = [...tasks];
            newItem.splice(index, 1);
            return {
                tasks: newItem
            };
        },
        setAllDone: ({ tasks }) => {
            for (const task in tasks) {
                tasks[task].done = true;
            }
        }
    },
});

export const { addTask, toogleHideDone, toogleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selecTasks = state => state.tasks;
export default tasksSlice.reducer;  