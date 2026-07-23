import { Norma } from "@/services/api";

export interface NormasState {
    data: Norma[]
    loading: boolean
    error: string | null
}

export const normasInitialState: NormasState = {
    data: [],
    loading: false,
    error: null,
}