import { useEffect } from "react"
import { selectNormas, selectNormasLoading } from "./selectors"
import { fetchNormasRequest } from "./actions"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

export function NormasLista() {
    const dispatch = useAppDispatch()
    const normas = useAppSelector(selectNormas)
    const loading = useAppSelector(selectNormasLoading)

    useEffect(() => {
        dispatch(fetchNormasRequest())
    }, [dispatch])

    if (loading) {
        return <div>Cargando normas...</div>
    }

    return (
        <ul>
            {normas.map(norma => (
                <li key={norma.id}>
                    {norma.titulo} - Estado: {norma.estado}
                </li>
            ))}
        </ul>
    )
}