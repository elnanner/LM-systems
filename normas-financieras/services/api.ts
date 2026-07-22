export interface Norma {
    id: string
    numero: string
    tipo: "ley" | "decreto" | "resolucion" | "comunicacion"
    organismo: string
    titulo: string
    resumen: string
    fechaPublicacion: string
    estado: "vigente" | "modificada" | "derogada"
    url: string
}

export interface Alerta {
    id: string
    normaId: string
    titulo: string
    descripcion: string
    severidad: "baja" | "media" | "alta"
    fechaCreacion: string
    leida: boolean
}

const ORGANISMOS = ["BCRA", "CNV", "UIF", "AFIP"] as const
const TIPOS: Norma["tipo"][] = ["ley", "decreto", "resolucion", "comunicacion"]
const ESTADOS: Norma["estado"][] = ["vigente", "modificada", "derogada"]

const NORMAS: Norma[] = Array.from({ length: 20 }, (_, i) => {
    const numero = String(20000 + i * 137)
    const tipo = TIPOS[i % TIPOS.length]
    const organismo = ORGANISMOS[i % ORGANISMOS.length]

    return {
        id: `norma-${i + 1}`,
        numero,
        tipo,
        organismo,
        titulo: `${tipo === "comunicacion" ? "Comunicación" : tipo[0].toUpperCase() + tipo.slice(1)} ${numero} — ${organismo}`,
        resumen: `Actualización de régimen informativo N.º ${numero} emitida por ${organismo}, con impacto en el reporte de operaciones sujetas a control.`,
        fechaPublicacion: new Date(2024, i % 12, (i % 27) + 1).toISOString().slice(0, 10),
        estado: ESTADOS[i % ESTADOS.length],
        url: `https://normativa.example.com/normas/${numero}`,
    }
})

const ALERTAS: Alerta[] = Array.from({ length: 8 }, (_, i) => {
    const norma = NORMAS[i * 2]

    return {
        id: `alerta-${i + 1}`,
        normaId: norma.id,
        titulo: `Cambio detectado en ${norma.numero}`,
        descripcion: `La norma ${norma.numero} (${norma.organismo}) pasó a estado "${norma.estado}".`,
        severidad: (["baja", "media", "alta"] as const)[i % 3],
        fechaCreacion: new Date(2024, (i + 2) % 12, (i % 27) + 1).toISOString().slice(0, 10),
        leida: i % 3 === 0,
    }
})

function simularLatencia<T>(data: T, ms = 800): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(data), ms))
}

export function buscarNormas(): Promise<Norma[]> {
    return simularLatencia(NORMAS)
}

export function buscarNormaPorId(id: string): Promise<Norma | undefined> {
    return simularLatencia(NORMAS.find((norma) => norma.id === id))
}

export function buscarAlertas(): Promise<Alerta[]> {
    return simularLatencia(ALERTAS)
}
