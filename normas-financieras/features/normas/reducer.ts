import { NormasAction } from "./actions";
import { normasInitialState, NormasState } from "./types";


export function normasReducer(state: NormasState = normasInitialState, action: NormasAction): NormasState {
    switch (action.type) {
        case "NORMAS_FETCH_REQUEST":
            return { ...state, loading: true, error: null }
        case "NORMAS_FETCH_SUCCESS":
            return { ...state, loading: false, data: action.payload }
        case "NORMAS_FETCH_ERROR":
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}
