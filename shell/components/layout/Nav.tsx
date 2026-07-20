import styles from "./Nav.module.css";
import Link from "next/link";


export function Nav() {
    const items = [
        { href: '/soluciones', label: 'Soluciones' },
        { href: '/nosotros', label: 'Nosotros' },
        { href: '/industria', label: 'Industria' },
        { href: '/contacto', label: 'Contacto' }
    ];

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {items.map(item => (
                    <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}