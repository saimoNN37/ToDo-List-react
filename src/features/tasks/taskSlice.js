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
        toogleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            const newItem = [...state.tasks];
            newItem.splice(index, 1);
            return {
                tasks: newItem
            };
        },
        setAllDone: ({tasks}) => {
            for(const task in tasks){
                tasks[task].done = true;
            }
        }
    },
});

export const { addTask, toogleHideDone, toogleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selecTasks = state => state.tasks;
export default tasksSlice.reducer;  