import styles from './SpinnerRemote.module.css'

export function SpinnerRemote({ nombreProducto }: { nombreProducto: string }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.ring} />
            <p>Cargando {nombreProducto}...</p>
        </div>
    )
}