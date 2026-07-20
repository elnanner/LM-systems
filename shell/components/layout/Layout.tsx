import { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import styles from "./Layout.module.css"

type LayoutProps = {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}
