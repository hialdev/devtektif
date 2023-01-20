import Head from "next/head"
import {Footer, Navbar} from "../index"

export default function MainLayout({children}){
    return(
        <>
            <Head>
                <link rel="icon" href="/assets/logo.svg" type="image/gif" sizes="auto"></link>
                <meta name="theme-color" content="#191919" />
            </Head>
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