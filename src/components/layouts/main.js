import {Footer, Navbar} from "../index"

export default function MainLayout({children}){
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main className="overflow-hidden">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}