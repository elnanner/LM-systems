import { RootState } from "@/store";


export const selectNormas = (state: RootState) => state.normas.data

export const selectNormasLoading = (state: RootState) => state.normas.loading

export const selectNormasVigentes = (state: RootState) => state.normas.data.filter((norma) => norma.estado.toLowerCase() === "vigente")

export const selectNormaPorId = (state: RootState, id: string) => state.normas.data.find((norma) => norma.id === id)