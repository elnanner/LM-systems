import { call, put, takeEvery } from "redux-saga/effects"
import { fetchNormasSaga, normasSaga } from "./saga"
import { buscarNormas, Norma } from "@/services/api"
import { fetchNormasSuccess, fetchNormasError } from "./actions"

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

describe("normasSaga (watcher)", () => {
    it("escucha NORMAS_FETCH_REQUEST y delega en fetchNormasSaga", () => {
        const gen = normasSaga()

        expect(gen.next().value).toEqual(takeEvery("NORMAS_FETCH_REQUEST", fetchNormasSaga))
    })
})

describe("fetchNormasSaga", () => {
    it("en el caso exitoso: llama a buscarNormas y despacha SUCCESS con los datos", () => {
        const gen = fetchNormasSaga()

        expect(gen.next().value).toEqual(call(buscarNormas))
        expect(gen.next([normaDeEjemplo]).value).toEqual(put(fetchNormasSuccess([normaDeEjemplo])))
        expect(gen.next().done).toBe(true)
    })

    it("en el caso de error: despacha ERROR con el mensaje de la excepción", () => {
        const gen = fetchNormasSaga()

        expect(gen.next().value).toEqual(call(buscarNormas))

        const error = new Error("fallo de red")
        expect(gen.throw(error).value).toEqual(put(fetchNormasError(error.message)))
        expect(gen.next().done).toBe(true)
    })
})
