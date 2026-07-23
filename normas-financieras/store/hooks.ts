// store/hooks.ts
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { store, RootState } from "./index"

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
