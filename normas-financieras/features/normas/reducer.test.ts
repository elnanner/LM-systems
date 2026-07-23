import { normasReducer } from "./reducer"
import { normasInitialState } from "./types"
import { fetchNormasRequest, fetchNormasSuccess, fetchNormasError } from "./actions"
import { Norma } from "@/services/api"

const normaDeEjemplo: Norma = {
    id: "norma-1",
    numero: "20000",
    tipo: "ley",
    organismo: "BCRA",
    titulo: "Ley 20000 — BCRA",
    resumen: "Resumen de prueba",
    fechaPublicacion: "2024-01-01",
    estado: "vigente",
    url: "https://normativa.example.com/normas/20000",
}

describe("normasReducer", () => {
    it("pone loading en true y limpia el error ante REQUEST", () => {
        const estadoPrevio = { ...normasInitialState, error: "error viejo" }

        const resultado = normasReducer(estadoPrevio, fetchNormasRequest())

        expect(resultado.loading).toBe(true)
        expect(resultado.error).toBeNull()
    })

    it("guarda los datos y apaga loading ante SUCCESS", () => {
        const estadoPrevio = { ...normasInitialState, loading: true }

        const resultado = normasReducer(estadoPrevio, fetchNormasSuccess([normaDeEjemplo]))

        expect(resultado.loading).toBe(false)
        expect(resultado.data).toEqual([normaDeEjemplo])
    })

    it("guarda el error y apaga loading ante ERROR", () => {
        const estadoPrevio = { ...normasInitialState, loading: true }

        const resultado = normasReducer(estadoPrevio, fetchNormasError("no se pudo cargar"))

        expect(resultado.loading).toBe(false)
        expect(resultado.error).toBe("no se pudo cargar")
    })

    it("devuelve el estado sin cambios ante una action desconocida", () => {
        const resultado = normasReducer(normasInitialState, { type: "OTRA_ACTION" } as never)

        expect(resultado).toBe(normasInitialState)
    })
})
