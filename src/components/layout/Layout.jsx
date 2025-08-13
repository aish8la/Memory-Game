import { Header } from "./Header";

export function Layout({children, score}) {
    return (
        <div
            className="app"
        >
            <Header score={score}></Header>
            <main className="app-main">
                {children}
            </main>
        </div>
    )
}