import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Case({className, more}){
    return(
        <>
            {!more ? (
            <div className={`block relative rounded-2xl overflow-hidden max-h-[30em] ${className} `}>
                <Link href="/" className="block h-full"><img src={"/assets/images/case-dummy.jpg"} alt={"Image Case Name"} className="block w-full h-full object-cover object-center" /></Link>
                <div className="absolute bottom-0 w-full p-4 px-4 md:p-5 md:px-8 shadow-2xl flex items-center justify-between gap-3 rounded-tl-3xl bg-white">
                    <div className="">
                        <Link href="/"><h3 className="text-md md:text-xl font-medium mb-3">Heading Tester Two Line Text</h3></Link>
                        <div className="flex items-center gap-2">
                            <Link href="/" className="p-1 px-2 text-[10px] md:text-sm poppins lowercase text-dt-prm bg-gray-100 rounded-md">
                                Web Development
                            </Link>
                            <Link href="/" className="p-1 px-2 text-[10px] md:text-sm poppins lowercase text-dt-prm bg-gray-100 rounded-md">
                                App
                            </Link>
                        </div>
                    </div>
                    <Link href="/"><Icon className="text-2xl text-dt-prm" icon="fluent:content-view-28-filled" /></Link>
                </div>
            </div>
            ) : (
                <Link href="/" className={`inline-block rounded-2xl overflow-hidden ${className} `}>
                    <img src={"/assets/images/more-case.png"} alt={"Image Case Name"} className="object-cover max-h-[25em] bg-dt-black" />
                </Link>
            )}
        </>
    )
}