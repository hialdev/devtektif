export default function TitleSection({first = "The Solved Cases", last = "", align = "start"}){
    return(
        <>
            <section className="py-[5em] flex items-center justify-center">
                <div className={`container mx-auto text-${align}`}>
                    <h2 className={`text-4xl text-wrap lg:text-9xl font-extrabold uppercase inline-block`}> <span className="text-white px-5 bg-black ">{first}</span> <br />
                        <span className="text-purple-600 px-5 bg-white">{last}</span>
                    </h2>
                </div>
            </section>
        </>
    )
}