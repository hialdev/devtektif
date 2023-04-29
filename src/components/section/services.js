import { Icon } from "@iconify/react"
import { ItemService } from ".."
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import 'swiper/css';

export default function Services(){
    const [services, setServices] = useState([])

    useEffect(() => {
        const getServices = async () => {
            const res = await fetch('/api/services?limit=6&order=latest');
            const data = await res.json();
            setServices(data);
        }
        getServices()
    }, [])
    
    const swiperRef = useRef();

    return(
        <>
            <section className="p-4 bg-dt-black bg-no-repeat bg-right-top" style={{backgroundImage:"url('/assets/images/utils/blurr-service.png')"}}>
                <div className="container mx-auto py-[7em]">
                    <div className="my-[5em] text-white">
                        <h2 className="text-4xl font-medium mb-2">What we do for your case</h2>
                        <p>Solution for your case</p>
                    </div>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={15}
                        freeMode={true}
                        pagination={false}
                        modules={[FreeMode]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="mySwiper"
                    >
                        {
                            services.map((service)=>(
                                <SwiperSlide key={service.id} style={{width:"auto"}}><ItemService data={service} className="w-[250px] text-white" /></SwiperSlide>
                            ))
                        }
                        <SwiperSlide style={{width:"auto"}}><ItemService className="w-[185px] text-white" more /></SwiperSlide>
                    </Swiper>
                    <div className="flex items-center gap-4 mt-10">
                        <div className="h-1 w-full dt-hr rounded-lg"></div>
                        <div onClick={() => swiperRef.current?.slideNext()} className="flex cursor-pointer hover:text-white items-center justify-center p-2 px-4 rounded-[99px] bg-dt-prm">
                            <Icon className="text-3xl text-white" icon="ic:sharp-arrow-right-alt" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}