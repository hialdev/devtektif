import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/autoplay"

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function BlogSection(){
    return(
        <>
            <section>
                <div className="container mx-auto min-h-[40em]">
                    <div className="block md:flex gap-[2em] h-full items-center">
                        <div className="mb-[2.5em] px-4">
                            <h2 className="text-purple-600 text-7xl font-bold">Blog</h2>
                            <Image src={'/assets/image/lttc.png'} alt="LTTC" width={316} height={218}></Image>
                            <Link href="#" className="tracking-widest font-semibold text-xl mt-4 hover:italic hover:font-italic inline-flex items-center gap-4 text-purple-600">More<Icon icon="ph:arrow-right-bold" /></Link>
                        </div>
                        <div className="min-w-[0] px-4">
                            <Swiper
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                navigation={{
                                    prevEl: '.prev-blog',
                                    nextEl: '.next-blog',
                                }}
                                breakpoints={{
                                    640: {
                                      slidesPerView: 1,
                                      spaceBetween: 10,
                                    },
                                    768: {
                                      slidesPerView: 3,
                                      spaceBetween: 20,
                                    },
                                    1024: {
                                      slidesPerView: 4,
                                      spaceBetween: 10,
                                    },
                                  }}
                                freeMode={true}
                                modules={[Autoplay, Pagination, Navigation, FreeMode]}
                                className="caseSwiper"
                            >
                                <SwiperSlide>
                                    <div className="min-h-[30em] w-full">
                                        <Image className="rounded-xl mb-4 min-h-[13em] object-cover bg-gray-100" src={'/assets/image/case.png'} width={540} height={350}></Image>
                                        <Link href="" className=""><h3 className="text-3xl mb-3 text-white hover:underline hover:decoration-purple-600">Title of Blog Max Two Lines</h3></Link>
                                        <p className="line-clamp-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda in excepturi, eius perspiciatis quod officiis porro ex eum cupiditate voluptates quos magnam culpa totam sequi tempora eos odio quisquam a.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="min-h-[30em] w-full">
                                        <Image className="rounded-xl mb-4 min-h-[13em] object-cover bg-gray-100" src={'/assets/image/case.png'} width={540} height={350}></Image>
                                        <Link href="" className=""><h3 className="text-3xl mb-3 text-white hover:underline hover:decoration-purple-600">Title of Blog Max Two Lines</h3></Link>
                                        <p className="line-clamp-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda in excepturi, eius perspiciatis quod officiis porro ex eum cupiditate voluptates quos magnam culpa totam sequi tempora eos odio quisquam a.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="min-h-[30em] w-full">
                                        <Image className="rounded-xl mb-4 min-h-[13em] object-cover bg-gray-100" src={'/assets/image/case.png'} width={540} height={350}></Image>
                                        <Link href="" className=""><h3 className="text-3xl mb-3 text-white hover:underline hover:decoration-purple-600">Title of Blog Max Two Lines</h3></Link>
                                        <p className="line-clamp-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda in excepturi, eius perspiciatis quod officiis porro ex eum cupiditate voluptates quos magnam culpa totam sequi tempora eos odio quisquam a.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="min-h-[30em] w-full">
                                        <Image className="rounded-xl mb-4 min-h-[13em] object-cover bg-gray-100" src={'/assets/image/case.png'} width={540} height={350}></Image>
                                        <Link href="" className=""><h3 className="text-3xl mb-3 text-white hover:underline hover:decoration-purple-600">Title of Blog Max Two Lines</h3></Link>
                                        <p className="line-clamp-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda in excepturi, eius perspiciatis quod officiis porro ex eum cupiditate voluptates quos magnam culpa totam sequi tempora eos odio quisquam a.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="min-h-[30em] w-full">
                                        <Image className="rounded-xl mb-4 min-h-[13em] object-cover bg-gray-100" src={'/assets/image/case.png'} width={540} height={350}></Image>
                                        <Link href="" className=""><h3 className="text-3xl mb-3 text-white hover:underline hover:decoration-purple-600">Title of Blog Max Two Lines</h3></Link>
                                        <p className="line-clamp-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda in excepturi, eius perspiciatis quod officiis porro ex eum cupiditate voluptates quos magnam culpa totam sequi tempora eos odio quisquam a.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="min-h-[30em] w-full">
                                        <Image className="rounded-xl mb-4 min-h-[13em] object-cover bg-gray-100" src={'/assets/image/case.png'} width={540} height={350}></Image>
                                        <Link href="" className=""><h3 className="text-3xl mb-3 text-white hover:underline hover:decoration-purple-600">Title of Blog Max Two Lines</h3></Link>
                                        <p className="line-clamp-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda in excepturi, eius perspiciatis quod officiis porro ex eum cupiditate voluptates quos magnam culpa totam sequi tempora eos odio quisquam a.</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="flex justify-between items-center my-6">
                                <div className="cursor-pointer tracking-[0.6em] uppercase text-slate-600 hover:text-purple-600 p-1 px-2 hover:rounded-lg font-bold prev-blog">PREV</div>
                                <div className="cursor-pointer tracking-[0.6em] uppercase text-slate-600 hover:text-purple-600 p-1 px-2 hover:rounded-lg font-bold next-blog">NEXT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}