import { useRouter } from "next/router";

export default function NormasPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!router.isReady) {
        return <p>Cargando rutas....</p>
    }

    const segments = Array.isArray(slug) ? slug : [];
    const rutaInterna = segments.join("/");

    return (
        <div>
            <p>Ruta interna resuelta: {rutaInterna}</p>
            {
                /* import comentado hasta Module Federation (issue #018)
                <NormasRemote rutaInterna:{rutaInterna}/>*/}
        </div>
    )
}