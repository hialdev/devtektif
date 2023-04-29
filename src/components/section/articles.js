import { useEffect, useState } from "react"
import {ItemArticle} from ".."
import axios from "axios";

export default function Articles({className}){
    const [articles, setArticles] = useState([])

    async function getData() {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/article?page=1&filter=publish&limit=6`);
            setArticles(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return(
        <>
            <section className={`bg-dt-black bg-no-repeat bg-top bg-containt ${className}`} style={{backgroundImage:"url('/assets/images/utils/blurr-article.png')"}}>
                <div className="container mx-auto py-12 p-4">
                    <div className="my-[5em] text-white text-center">
                        <h2 className="text-4xl font-medium mb-2">Explore Articles</h2>
                        <p>Sharing knowladges from many cases</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {
                            articles?.data?.map((article) => (
                                <ItemArticle key={article.id} data={article} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}