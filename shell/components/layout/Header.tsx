import Link from "next/link"
import styles from "./Header.module.css"
import { Nav } from "./Nav"

export function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.brand}>
                LM Systems
            </Link>
            <Nav />
        </header>
    )
}