import { takeEvery, call, put, select, delay, } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSucces, selecTasks, } from "./taskSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000)
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSucces(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError, "Coś poszło nie tak!");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selecTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}