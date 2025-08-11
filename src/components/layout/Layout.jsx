import { Header } from "./Header";

export function Layout({children}) {
    return (
        <div
            className="app"
        >
            <Header></Header>
            <main className="app-main">
                {children}
            </main>
        </div>
    )
}