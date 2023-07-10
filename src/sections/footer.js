import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer(){
    return(
        <>
            <section className="py-[5em]">
                <div className="container mx-auto rounded-xl bg-black text-white">
                    <div className="flex items-center gap-4 justify-center py-7 mb-8 border-b border-gray-900">
                        <img src="/assets/image/Logo.svg" alt="Logo Footer Devtektif" className="w-3em block" />
                        <div className="text-xl font-bold">Dev<span className="text-purple-600">tektif.</span></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-around gap-[2em] text-gray-400">
                        <div className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo nihil ipsum nam porro est rem ipsam modi facilis numquam consectetur maiores sunt natus, ea dolore, reiciendis quidem, recusandae sapiente.
                        </div>
                        <div>
                            <h5 className="text-4xl font-bold mb-4">Menu</h5>
                            <ul className="flex flex-wrap gap-4">
                                <li><Link href="/" className="text-gray-500 hover:text-gray-300 hover:underline hover:decoration-purple-600">Our Case</Link></li>
                                <li><Link href="/" className="text-gray-500 hover:text-gray-300 hover:underline hover:decoration-purple-600">Our Case</Link></li>
                                <li><Link href="/" className="text-gray-500 hover:text-gray-300 hover:underline hover:decoration-purple-600">Our Case</Link></li>
                                <li><Link href="/" className="text-gray-500 hover:text-gray-300 hover:underline hover:decoration-purple-600">Our Case</Link></li>
                                <li><Link href="/" className="text-gray-500 hover:text-gray-300 hover:underline hover:decoration-purple-600">Our Case</Link></li>
                                <li><Link href="/" className="text-gray-500 hover:text-gray-300 hover:underline hover:decoration-purple-600">Our Case</Link></li>
                                <li><Link href="/" className="text-gray-500 hover:text-gray-300 hover:underline hover:decoration-purple-600">Our Case</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-4xl font-bold mb-7">Spy us</h5>
                            <ul className="flex gap-8">
                                <li><Link href="/" className="hover:text-purple-600 text-gray-500"><Icon icon="bi:instagram" className="w-[1.7em] h-[1.7em]" /></Link></li>
                                <li><Link href="/" className="hover:text-purple-600 text-gray-500"><Icon icon="bi:youtube" className="w-[1.7em] h-[1.7em]" /></Link></li>
                                <li><Link href="/" className="hover:text-purple-600 text-gray-500"><Icon icon="bi:tiktok" className="w-[1.7em] h-[1.7em]" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-gray-500 mt-[3em]">&copy; All reserverd by Devtektif | 2023</div>
                </div>
                
            </section>
        </>
    )
}