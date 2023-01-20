import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Case({className, more, data}){
    return(
        <>
            {!more ? (
            <div className={`block relative rounded-2xl overflow-hidden max-h-[30em] ${className} `}>
                <Link href={`/case/${data.slug}`} className="block h-full"><img src={data.image} alt={data.title + "Image"} className="block w-full h-full object-cover object-center" /></Link>
                <div className="absolute bottom-0 w-full p-4 px-4 md:p-5 md:px-8 shadow-2xl flex items-center justify-between gap-3 rounded-tl-3xl bg-white">
                    <div className="">
                        <Link href={`/case/${data.slug}`}><h3 className="text-md md:text-xl font-medium mb-3">{data.title}</h3></Link>
                        <div className="flex items-center gap-2">
                            <Link href={`/case/${data.slug}`} className="p-1 px-2 text-[10px] md:text-sm poppins lowercase text-dt-prm bg-gray-100 rounded-md">
                                Web Development
                            </Link>
                            <Link href={`/case/${data.slug}`} className="p-1 px-2 text-[10px] md:text-sm poppins lowercase text-dt-prm bg-gray-100 rounded-md">
                                App
                            </Link>
                        </div>
                    </div>
                    <Link href={`/case/${data.slug}/demo`}><Icon className="text-2xl text-dt-prm" icon="fluent:content-view-28-filled" /></Link>
                </div>
            </div>
            ) : (
                <Link href="/case" className={`inline-block rounded-2xl overflow-hidden ${className} `}>
                    <img src={"/assets/images/more-case.png"} alt={"Image more case"} className="object-cover max-h-[25em] bg-dt-black" />
                </Link>
            )}
        </>
    )
}