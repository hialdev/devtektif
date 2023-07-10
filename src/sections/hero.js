import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

import { Autoplay, Mousewheel, Pagination } from "swiper"
import Link from "next/link";

export default function HeroSection(){
    return(
        <>
            <section className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center py-[3em] overflow-hidden">
                    <div className="relative z-20 flex-initial p-4 mt-[7em] md:mt-[4em]">
                        <h1 className="text-4xl md:text-8xl mb-[2em] lg:mr-[-4em] w-100"><span className="font-bold text-purple-600">We‘re</span> Investigate & Solve Your Problem</h1>
                        <div className="flex items-start justify-between max-w-[44em]">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-initial w-10">
                                    <div className="h-2 w-6 mt-2 bg-purple-600"></div>
                                </div>
                                <div className="flex-auto text-gray-500">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui fugit eum architecto accusantium perferendis aliquid sed nostrum ullam corporis ex obcaecati provident tempore a dolorem cum odio culpa, possimus corrupti.
                                    Praesentium esse quaerat iste et illum tempore corporis ipsam? Hic ea laudantium aliquam nostrum eius? Ipsum, eius. Labore deserunt illo non exercitationem dicta quaerat dolores iure repellendus? Ipsa, quam temporibus!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-end items-start h-screen hidden lg:block">
                        <div className="h-[100em]">
                            <Swiper
                                direction={"vertical"}
                                slidesPerView={2}
                                centeredSlides={true}
                                spaceBetween={40}
                                mousewheel={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Mousewheel, Autoplay]}
                                className="max-h-[screen] max-w-[700px]"
                            >
                                <SwiperSlide className="min-w-[700px] min-h-[800px] mt-[29em] object-cover rounded-2xl overflow-hidden"><Image src={`/assets/image/img-hero.png`} width={700} height={800} className="w-[700px] h-[800px] object-cover" /></SwiperSlide>
                                <SwiperSlide className="min-w-[700px] min-h-[200px] object-cover rounded-2xl overflow-hidden"><Image src={`/assets/image/img-hero.png`} width={700} height={800} className="w-[700px] h-[800px] object-cover" /></SwiperSlide>
                                <SwiperSlide className="min-w-[700px] min-h-[400px] object-cover rounded-2xl overflow-hidden"><Image src={`/assets/image/img-hero.png`} width={700} height={800} className="w-[700px] h-[800px] object-cover" /></SwiperSlide>
                                <SwiperSlide className="min-w-[700px] min-h-[800px] object-cover rounded-2xl overflow-hidden"><Image src={`/assets/image/img-hero.png`} width={700} height={800} className="w-[700px] h-[800px] object-cover" /></SwiperSlide>
                                <SwiperSlide className="min-w-[700px] min-h-[400px] object-cover rounded-2xl overflow-hidden"><Image src={`/assets/image/img-hero.png`} width={700} height={800} className="w-[700px] h-[800px] object-cover" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}