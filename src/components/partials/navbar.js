import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar(){
    const [active,setActive] = useState(false)

    return(
        <>
            <div className="bg-transparent absolute top-0 w-100 right-0 left-0">
                <div className="container mx-auto p-3 px-3 md:px-6 lg:px-0 flex items-center justify-between">
                    <div className="logo flex items-center gap-3">
                        <Image src="/assets/logo.svg" width={39} height={39} alt="Logo Devtektif" />
                        <div className="hidden md:block poppins dt-font text-white text-2xl"><strong>Dev</strong><span className="text-dt-prm font-semibold">tektif</span></div>
                    </div>
                    <div onClick={() => setActive(true)} className="cursor-pointer flex items-center justify-center text-white lg:hidden">
                        <Icon className="text-4xl" icon="humbleicons:align-text-right" />
                    </div>
                    <nav className={`transition duration-500 dt-navbar ${active ? 'active' : ''} lg:p-0 lg:m-0`}>
                        <div onClick={() => setActive(false)} className="cursor-pointer flex items-center justify-center p-3 rounded-full bg-[#191919] text-white lg:hidden hover:bg-red-600 transition">
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </div>
                        <Link className="" href="/">Home</Link>
                        <Link className="" href="/">Services</Link>
                        <Link className="" href="/">Case</Link>
                        <Link className="" href="/">Articles</Link>
                        <Link className="" href="/">Contact</Link>
                        <div className="w-full text-center cursor-pointer font-medium p-3 px-6 border-2 border-dt-prm text-purple-600 dt-font hover:bg-purple-600 hover:rounded-full transition duration-300 hover:text-white">Open Case</div>
                    </nav>
                </div>
            </div>
        </>
    )
}