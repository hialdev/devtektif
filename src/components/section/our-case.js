import { ItemCase } from ".."
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

export default function OurCase(){
    const [cases, setCases] = useState([])

    useEffect(() => {
        const getCases = async () => {
            const res = await fetch('/api/cases?limit=4&order=latest');
            const data = await res.json();
            setCases(data);
        }
        getCases()
    }, [])

    const pagination={
      clickable:true,
      el : '.dt-dots',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    }
    return(
        <>
            <section className="bg-dt-black bg-no-repeat bg-top-left p-4" style={{backgroundImage:"url('/assets/images/utils/blurr-case.png')"}}>
                <div className="container mx-auto py-12">
                    <div className="my-[5em] text-white text-center">
                        <h2 className="text-4xl font-medium mb-2">Our Solved Cases</h2>
                        <p>Some of the cases that have been resolved by us</p>
                    </div>
                    <Swiper
                      slidesPerView={"auto"}
                      spaceBetween={15}
                      pagination={pagination}
                      modules={[Pagination, FreeMode]}
                      className="dt-swiper"
                    >
                        {cases.map((data) => (
                            <SwiperSlide key={data.id} style={{width:'auto'}}><ItemCase data={data} className="w-[18em] h-[15em] sm:w-[25em] sm:h-[20em] md:w-[35em] md:h-[25em] lg:w-[50em]" /></SwiperSlide>
                          ))
                        }
                        <SwiperSlide style={{width:'auto'}}><ItemCase className="w-[18em] h-[15em] sm:w-[25em] sm:h-[20em] md:w-[35em] md:h-[25em] lg:w-[50em]" more/></SwiperSlide>
                    </Swiper>
                    <div className="dt-dots flex items-center gap-1 md:gap-2 mt-5 cusor-pointer"></div>
                </div>
            </section>
        </>
    )
}