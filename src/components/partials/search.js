import { Icon } from "@iconify/react"
import axios from "axios"
import { formatDate } from "lib/helper/date"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Search({className}){
    const [open,setOpen] = useState(false)
    const [articles,setArticles] = useState([])
    const [cases,setCases] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        checkInput()
    }, [input])

    const checkInput = () => {
        if(input.length > 2 && input != false){
            getArticles(input)
            getCases(input)
            setOpen(true)
            console.log(input)
        }else{
            setOpen(false)
            console.log("False : ".input)
        }
    }

    async function getArticles(search) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/article?page=1&filter=publish&limit=6&search=${search}`);
            setArticles(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function getCases(search) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/case?page=1&filter=publish&limit=6&search=${search}`);
            setCases(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log(error);
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
            <div className={`absolute mt-2 w-full group-hover:block z-20 ${open ? "block" : "hidden"}`}>
                <ul className="p-4 bg-[#212121] rounded-3xl text-white border-2 border-dt-opa shadow-xl">
                    <li><span className="font-medium dt-font poppins">Case</span></li>
                    {
                        cases?.data?.length > 0 ? (
                            cases?.data?.map((cas) => (
                                <li key={cas.id} className="pb-4 my-4 border-b border-[#353535] group">
                                    <Link href={`/case/${cas.slug}`} className="block flex items-center gap-4">
                                        <img src={process.env.NEXT_PUBLIC_URL_SERVER+"/"+cas.image?.path} alt={"Suggest Image of "+cas.title} className="block h-[4em] w-[5em] object-cover rounded-md" />
                                        <div className="">
                                            <div className="text-md font-medium line-clamp-1 poppins mb-3 group-hover:underline">{cas.title}</div>
                                            <div className="text-sm flex items-center gap-2">
                                                <span className="px-2 p-[1px] rounded-lg bg-[#353535] text-gray-400 lowercase">App</span>
                                                <span className="px-2 p-[1px] rounded-lg bg-[#353535] text-gray-400 lowercase">Web Development</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="pb-4 my-4 border-b border-[#353535] group">
                                <span className="font-medium text-gray-500">Tidak ada cases yang cocok</span>
                            </li>
                        )
                    }
                    <li><span className="font-medium dt-font poppins">Articles</span></li>
                    {
                        articles?.data?.length > 0 ? (
                            articles?.data?.map((art) => (
                                <li key={art.id} className="pb-4 my-4 border-b border-[#353535] group">
                                    <Link href={"/article/"+art.slug} className="block flex items-center gap-4">
                                        <img src={process.env.NEXT_PUBLIC_URL_SERVER+"/"+art.image?.path} alt={art.title+" Image Suggest"} className="block h-[4em] w-[5em] object-cover rounded-md" />
                                        <div className="">
                                            <div className="text-md font-medium line-clamp-2 poppins group-hover:underline">{art.title}</div>
                                            <div className="text-sm text-gray-400">{formatDate(art.created)}</div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="pb-4 my-4 border-b border-[#353535] group">
                                <span className="font-medium text-gray-500">Tidak ada artikel yang cocok</span>
                            </li>
                        )
                    }
                    {
                        (articles?.data?.length > 4 || cases?.data?.length > 4) ? (
                            <li>
                                <Link href="/" className="block p-1 text-center underline">
                                    <span className="poppins dt-font font-medium text-purple-500">More Results</span>
                                </Link>
                            </li>
                        ) : (<div></div>)
                    }
                    
                </ul>
            </div>
        </div>
    )
}