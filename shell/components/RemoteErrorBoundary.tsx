import { Component, ReactNode } from "react"
import styles from "./RemoteErrorBoundary.module.css"

type RemoteErrorBoundaryProps = {
    children: ReactNode
}

type RemoteErrorBoundaryState = {
    hasError: boolean
}

export class RemoteErrorBoundary extends Component<RemoteErrorBoundaryProps, RemoteErrorBoundaryState> {
    state: RemoteErrorBoundaryState = { hasError: false }

    static getDerivedStateFromError(): RemoteErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error) {
        console.error("RemoteErrorBoundary capturó un error:", error)
    }

    handleRetry = () => {
        this.setState({ hasError: false })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.errorBoundary}>
                    <p>No pudimos cargar este contenido.</p>
                    <button className={styles.retryButton} onClick={this.handleRetry}>
                        Reintentar
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}
