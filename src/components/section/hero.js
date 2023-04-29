import { Search } from ".."

export default function Hero(){
    return(
        <>
            <div className="bg-dt-black text-white bg-no-repeat bg-top py-[6em] pt-[8em]" style={{backgroundImage:"url('/assets/images/utils/blurr-hero.png')"}}>
                <div className="flex flex-col lg:flex-row items-center h-auto lg:h-[35em] xl:h-[45em]">
                    <div className="flex-auto w-full p-4 lg:w-[60%] lg:p-10 xl:w-[70%] xl:p-10 xl:pl-[10em]">
                        <div className="inline-block border-b-2 border-dt-prm pb-3 mb-6">Develop your business like a Detective</div>
                        <h1 className="text-5xl sm:text-6xl xl:text-8xl font-bold mb-10">We Will Investigate & Solve Your Problem</h1>
                        <Search className="max-w-[30em]" />
                    </div>
                    <div className="hidden lg:block flex-auto lg:w-[40%] xl:w-[30%] self-end">
                        <img src={"/assets/images/detective.svg"} alt={"Detective Illustration"} className="block ml-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}