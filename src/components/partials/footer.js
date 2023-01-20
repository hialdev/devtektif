import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Footer(){
    return(
        <>
            <footer className="bg-dt-black bg-no-repeat bg-left-bottom bg-containt pt-[10em]" style={{backgroundImage:"url('/assets/images/utils/blurr-footer.png')"}}>
                <div className="flex flex-col px-4 md:px-0 md:flex-row container mx-auto gap-6 justify-between py-[5em] text-white">
                    <div className="max-w-[20em] flex flex-col gap-5">
                        <img src={"/assets/logo.svg"} alt={"Logo Footer"} className="w-[2em] block" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, libero id assumenda velit qui illum perspiciatis expedita ex nulla a sunt maxime dolorum minus. Numquam aspernatur excepturi debitis similique repellat?</p>
                        <div className="flex items-center gap-4">
                            <Icon icon="bi:facebook" />
                            <Icon icon="bi:twitter" />
                            <Icon icon="bi:instagram" />
                            <Icon icon="bi:linkedin" />
                        </div>
                    </div>

                    <ul className="hidden md:flex flex-col gap-3">
                        <li className="font-semibold poppins dt-font">Pages</li>
                        <li><Link href="/">About us</Link></li>
                        <li><Link href="/">Services</Link></li>
                        <li><Link href="/">Case</Link></li>
                        <li><Link href="/">Article</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>

                    <ul className="flex flex-col gap-3">
                        <li className="font-semibold poppins dt-font">Services</li>
                        <li><Link href="/">Service Name</Link></li>
                        <li><Link href="/">Service Name</Link></li>
                        <li><Link href="/">Service Name</Link></li>
                        <li><Link href="/">Service Name</Link></li>
                        <li><Link href="/">Service Name</Link></li>
                    </ul>

                    <ul className="flex flex-col gap-3">
                        <li className="font-semibold poppins dt-font">Contact</li>
                        <li><Link href="/">Jl. Apa yah biar enak gitu, Jakarta Selatan, DKI Jakarta. 7070</Link></li>
                        <li><Link href="/">Contact@mail.com</Link></li>
                        <li><Link href="/">089671025050</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}