import { Icon } from "@iconify/react"
import { formatDate } from "lib/helper/date"
import Image from "next/image"
import Link from "next/link"

export default function Article({data}){
    return(
        <div>
            <Link href={`/article/${data.slug}`} className="block p-3 rounded-[30px] overflow-hidden text-white border-2 border-dt-opa hover:border-gray-200 hover:bg-white hover:text-black">
                <Image src={process.env.NEXT_PUBLIC_URL_SERVER+"/"+data.image.path} alt={`image of ${data.title}`} width={1450} height={1090} className="w-full max-h-[15em] object-cover object-center mb-3 rounded-t-3xl" />
                <h3 className="font-medium text-md md:text-lg lg:text-2xl mb-5">{data.title}</h3>
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{formatDate(data.created_at)}</div>
                    <div className="flex items-center justify-center p-2 rounded-full bg-gray-200 text-black">
                        <Icon icon="ic:round-arrow-forward-ios" />
                    </div>
                </div>
            </Link>                                                                                            
        </div>
    )
}