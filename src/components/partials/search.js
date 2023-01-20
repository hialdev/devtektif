import { Icon } from "@iconify/react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Search({className}){
    const [open,setOpen] = useState(false)
    const [input, setInput] = useState("")
    useEffect(() => {
        checkInput()
    })
    const checkInput = () => {
        if(input.length > 2 && input != false){
            setOpen(true)
            console.log(input)
        }else{
            setOpen(false)
            console.log("False : ".input)
        }
    }

    return(
        <div className={`relative w-full ${className}`}>
            <div className="border-2 flex rounded-full items-center justify-between p-2 border-dt-prm w-full">
                <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Search case or article" className="bg-transparent text-white border-b outline-none w-full mx-4" />
                <button className="flex items-center justify-center p-2 bg-dt-prm text-white rounded-full">
                    <Icon icon="icon-park-outline:search" />
                </button>
            </div>
            <div className={`absolute mt-2 w-full group-hover:block ${open ? "block" : "hidden"}`}>
                <ul className="p-4 bg-[#212121] rounded-3xl text-white border-2 border-dt-opa shadow-xl">
                    <li><span className="font-medium dt-font poppins">Case</span></li>
                    <li className="pb-4 my-4 border-b border-[#353535] group">
                        <Link href="/" className="block flex items-center gap-4">
                            <img src={"/assets/images/case-dummy.jpg"} alt={"Suggest"} className="block h-[4em] max-w-[5em] object-cover rounded-md" />
                            <div className="">
                                <div className="text-md font-medium line-clamp-1 poppins mb-3 group-hover:underline">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus laudantium tempora, sunt atque, error ipsum rem voluptatibus vero molestiae veniam quo perferendis. Culpa minus accusantium sit maiores fuga non sequi.</div>
                                <div className="text-sm flex items-center gap-2">
                                    <span className="px-2 p-[1px] rounded-lg bg-[#353535] text-gray-400 lowercase">App</span>
                                    <span className="px-2 p-[1px] rounded-lg bg-[#353535] text-gray-400 lowercase">Web Development</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li><span className="font-medium dt-font poppins">Articles</span></li>
                    <li className="pb-4 my-4 border-b border-[#353535] group">
                        <Link href="/" className="block flex items-center gap-4">
                            <img src={"/assets/images/case-dummy.jpg"} alt={"Suggest"} className="block h-[4em] max-w-[5em] object-cover rounded-md" />
                            <div className="">
                                <div className="text-md font-medium line-clamp-2 poppins group-hover:underline">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus laudantium tempora, sunt atque, error ipsum rem voluptatibus vero molestiae veniam quo perferendis. Culpa minus accusantium sit maiores fuga non sequi.</div>
                                <div className="text-sm text-gray-400">12 Januari 2022</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="block p-1 text-center underline">
                            <span className="poppins dt-font font-medium text-purple-500">More Results</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}