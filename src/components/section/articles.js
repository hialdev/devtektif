import { useEffect, useState } from "react"
import {ItemArticle} from ".."

export default function Articles({className}){
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const res = await fetch('/api/articles?limit=4&order=latest');
            const data = await res.json();
            setArticles(data);
        }
        getArticles()
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
                            articles.map((article) => (
                                <ItemArticle key={article.id} data={article} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}