import { buscarNormas, Norma } from "@/services/api";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchNormasError, fetchNormasSuccess } from "./actions";


export function* fetchNormasSaga() {
    try {
        const normas = (yield call(buscarNormas)) as Norma[]
        yield put(fetchNormasSuccess(normas))
    } catch (error) {
        yield put(fetchNormasError((error as Error).message))
    }
}

export function* normasSaga() {
    yield takeEvery("NORMAS_FETCH_REQUEST", fetchNormasSaga)
}