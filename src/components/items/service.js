import Link from "next/link"

export default function Service({className, more, data}){
    return(
        <>
            <div>
                {!more ? (
                <div className={`block border-2 border-dt-opa p-5 rounded-2xl ${className}`}>
                    <img src={data.image} alt={data.title +" Service Icon"} className="block w-[2.5em] mb-3" />
                    <h3 className="text-xl font-semibold mb-2 line-clamp-1">{data.title}</h3>
                    <p className="line-clamp-3">{data.excerpt}</p>
                </div>
                ) : (
                    <Link href="/service" className={`block rounded-2xl overflow-hidden bg-dt-black ${className}`}>
                        <img src={"/assets/images/more-service.png"} alt={"More Service"} className="block object-cover" />
                    </Link>
                    )
                }
            </div>
        </>
    )
}