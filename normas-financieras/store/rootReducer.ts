import { combineReducers } from "redux";

interface AppState {
    inicializado: boolean
}

const initialAppState: AppState = { inicializado: true }

function appReducer(state = initialAppState, action: { type: string }): AppState {
    return state
}

export const rootReducer = combineReducers({
  app: appReducer,
})
