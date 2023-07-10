// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/autoplay"

import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function CaseSection(){
    return(
        <>
            <section className="py-[5em]">
                <div className="container my-auto mx-auto flex justify-center items-center px-4 py-[7em] h-full ">
                    <div className="w-full">
                        <div className="flex justify-between items-center mb-6">
                            <div className="cursor-pointer uppercase text-slate-300 hover:bg-purple-600 p-1 px-2 hover:rounded-lg font-bold prev">PREV</div>
                            <div className="cursor-pointer uppercase text-slate-300 hover:bg-purple-600 p-1 px-2 hover:rounded-lg font-bold next">NEXT</div>
                        </div>
                        <Swiper
                            navigation={{
                                prevEl: '.prev',
                                nextEl: '.next',
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            spaceBetween={20}
                            modules={[Autoplay, Navigation]}
                            className="caseSwiper"
                        >
                            <SwiperSlide>
                                <div className="flex md:flex-row flex-col gap-6 items-center">
                                    <div className="flex-1">
                                        <div className="rounded-xl overflow-hidden bg-gray-100">
                                            <Image src={`/assets/image/case.png`} width={800} height={650} className="block min-h-[200px] lg:min-h-[650px] lg:min-w-[800px] w-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex-initial w-full md:w-[30%] p-2 lg:p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="p-1 px-2 bg-purple-600 text-sm text-white rounded-xl">web</span>
                                            <span className="p-1 px-2 bg-purple-600 text-sm text-white rounded-xl">app</span>
                                            <span className="p-1 px-2 bg-purple-600 text-sm text-white rounded-xl">ui/ux</span>
                                        </div>
                                        <Link href={'#'}><h3 className="text-xl lg:text-4xl mb-3 line-clamp-2 hover:underline hover:decoration-purple-600">
                                            Title of Case Max Two Lines
                                        </h3></Link>
                                        <p className="text-sm line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, suscipit perferendis quibusdam unde nemo minima. Atque dignissimos quia amet eius quo odit, perspiciatis sit incidunt quasi, accusantium modi maxime blanditiis?</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex md:flex-row flex-col gap-6 items-center">
                                    <div className="flex-1">
                                        <div className="rounded-xl overflow-hidden bg-gray-100">
                                            <Image src={`/assets/image/case.png`} width={800} height={650} className="block min-h-[200px] lg:min-h-[650px] lg:min-w-[800px] w-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex-initial w-full md:w-[30%] p-2 lg:p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="p-1 px-2 bg-orange-600 text-sm text-white rounded-xl">web</span>
                                            <span className="p-1 px-2 bg-orange-600 text-sm text-white rounded-xl">app</span>
                                            <span className="p-1 px-2 bg-orange-600 text-sm text-white rounded-xl">ui/ux</span>
                                        </div>
                                        <Link href={'#'}><h3 className="text-xl lg:text-4xl mb-3 line-clamp-2 hover:underline hover:decoration-purple-600">
                                            Title of Case Max Two Lines
                                        </h3></Link>
                                        <p className="text-sm line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, suscipit perferendis quibusdam unde nemo minima. Atque dignissimos quia amet eius quo odit, perspiciatis sit incidunt quasi, accusantium modi maxime blanditiis?</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex md:flex-row flex-col gap-6 items-center">
                                    <div className="flex-1">
                                        <div className="rounded-xl overflow-hidden bg-gray-100">
                                            <Image src={`/assets/image/case.png`} width={800} height={650} className="block min-h-[200px] lg:min-h-[650px] lg:min-w-[800px] w-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex-initial w-full md:w-[30%] p-2 lg:p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="p-1 px-2 bg-emerald-600 text-sm text-white rounded-xl">web</span>
                                            <span className="p-1 px-2 bg-emerald-600 text-sm text-white rounded-xl">app</span>
                                            <span className="p-1 px-2 bg-emerald-600 text-sm text-white rounded-xl">ui/ux</span>
                                        </div>
                                        <Link href={'#'}><h3 className="text-xl lg:text-4xl mb-3 line-clamp-2 hover:underline hover:decoration-purple-600">
                                            Title of Case Max Two Lines
                                        </h3></Link>
                                        <p className="text-sm line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, suscipit perferendis quibusdam unde nemo minima. Atque dignissimos quia amet eius quo odit, perspiciatis sit incidunt quasi, accusantium modi maxime blanditiis?</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex md:flex-row flex-col gap-6 items-center">
                                    <div className="flex-1">
                                        <div className="rounded-xl overflow-hidden bg-gray-100">
                                            <Image src={`/assets/image/case.png`} width={800} height={650} className="block min-h-[200px] lg:min-h-[650px] lg:min-w-[800px] w-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex-initial w-full md:w-[30%] p-2 lg:p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="p-1 px-2 bg-yellow-600 text-sm text-white rounded-xl">web</span>
                                            <span className="p-1 px-2 bg-yellow-600 text-sm text-white rounded-xl">app</span>
                                            <span className="p-1 px-2 bg-yellow-600 text-sm text-white rounded-xl">ui/ux</span>
                                        </div>
                                        <Link href={'#'}><h3 className="text-xl lg:text-4xl mb-3 line-clamp-2 hover:underline hover:decoration-purple-600">
                                            Title of Case Max Two Lines
                                        </h3></Link>
                                        <p className="text-sm line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, suscipit perferendis quibusdam unde nemo minima. Atque dignissimos quia amet eius quo odit, perspiciatis sit incidunt quasi, accusantium modi maxime blanditiis?</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col gap-3 h-full min-h-[30em] items-start justify-center">
                                    <div className="mb-auto text-left max-w-[40em] text-3xl pt-4 line-clamp-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, inventore tempora incidunt cum, assumenda magni minus quaerat asperiores quia iusto quibusdam, harum vitae? Sequi enim maiores laudantium neque totam laborum.</div>
                                    <Link href={"#"} className="flex flex-col gap-4 text-right justify-end items-end ms-auto">
                                        <h5 className="text-7xl font-bold text-black bg-purple-600">See More</h5>
                                        <Icon icon="lucide:move-right" className="text-7xl" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}