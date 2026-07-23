import { normasReducer } from "@/features/normas/reducer";
import { NormasAction } from "@/features/normas/actions";
import { combineReducers, Reducer, UnknownAction } from "redux";

interface AppState {
    inicializado: boolean
}

const initialAppState: AppState = { inicializado: true }

function appReducer(state = initialAppState, action: { type: string }): AppState {
    return state
}

export const rootReducer = combineReducers({
    app: appReducer,
    normas: normasReducer as Reducer<ReturnType<typeof normasReducer>, NormasAction | UnknownAction>
})
