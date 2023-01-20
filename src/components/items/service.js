import Link from "next/link"

export default function Service({className, more}){
    return(
        <>
            <div>
                {!more ? (
                <div className={`block border-2 border-dt-opa p-5 rounded-2xl ${className}`}>
                    <img src={"/assets/icons/design.svg"} alt={"Icon Name"} className="block w-[2.5em] mb-3" />
                    <h3 className="text-xl font-semibold mb-2 line-clamp-1">UI/UX Design</h3>
                    <p className="line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eos fugit, error perferendis provident quasi ab? Saepe eos officia facere. Error reiciendis molestias saepe rem minus corrupti aliquid officiis quisquam?</p>
                </div>
                ) : (
                    <Link href="/" className={`block rounded-2xl overflow-hidden bg-dt-black ${className}`}>
                        <img src={"/assets/images/more-service.png"} alt={"More Service"} className="block object-cover" />
                    </Link>
                    )
                }
            </div>
        </>
    )
}