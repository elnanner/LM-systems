import Link from "next/link"
import styles from "./Footer.module.css"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.section}>
                <p className={styles.brand}>LM Systems</p>
                <p className={styles.text}>
                    Normativa financiera y prevención de lavado de activos, en un solo lugar.
                </p>
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Contacto</p>
                <ul className={styles.list}>
                    <li>
                        <a href="mailto:contacto@lmsystems.com">contacto@lmsystems.com</a>
                    </li>
                    <li>
                        <a href="tel:+541100000000">+54 11 0000-0000</a>
                    </li>
                </ul>
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Legales</p>
                <ul className={styles.list}>
                    <li>
                        <Link href="/terminos">Términos y condiciones</Link>
                    </li>
                    <li>
                        <Link href="/privacidad">Política de privacidad</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Redes</p>
                <ul className={styles.list}>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>

            <p className={styles.copyright}>
                © {new Date().getFullYear()} LM Systems. Todos los derechos reservados.
            </p>
        </footer>
    )
}
