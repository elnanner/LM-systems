import { Norma } from "@/services/api"


interface FetchNormasRequest {
    type: "NORMAS_FETCH_REQUEST"
}

interface FetchNormasSuccess {
    type: "NORMAS_FETCH_SUCCESS",
    payload: Norma[]
}

interface FetchNormasError {
    type: "NORMAS_FETCH_ERROR",
    payload: string
}

export type NormasAction = FetchNormasRequest | FetchNormasSuccess | FetchNormasError

export const fetchNormasRequest = (): FetchNormasRequest => ({
    type: "NORMAS_FETCH_REQUEST",
})

export const fetchNormasSuccess = (normas: Norma[]): FetchNormasSuccess => ({
    type: "NORMAS_FETCH_SUCCESS",
    payload: normas
})

export const fetchNormasError = (error: string): FetchNormasError => ({
    type: "NORMAS_FETCH_ERROR",
    payload: error
})