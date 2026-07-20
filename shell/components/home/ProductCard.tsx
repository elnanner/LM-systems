import Link from "next/link"
import styles from "./ProductCard.module.css"

export interface Dato {
    slug: string;
    titulo: string;
    descripcion: string;
}

export function ProductCard({ data }: { data: Dato }) {
    return (
        <Link className={styles.productCard} href={data.slug}>
            <span className={styles.titulo}>{data.titulo}</span>
            <p className={styles.descripcion}>{data.descripcion}</p>
        </Link>
    )
}