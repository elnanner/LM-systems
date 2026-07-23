import { normasSaga } from "@/features/normas/saga";
import { all } from "redux-saga/effects";


export function* rootSaga() {
    yield all([
        // Aquí puedes agregar tus sagas de cada feature
        normasSaga()
    ])
}