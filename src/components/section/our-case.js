import { ItemCase } from ".."
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

export default function OurCase(){
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
                      // breakpoints={{
                      //   640: {
                      //     slidesPerView: 2,
                      //     spaceBetween: 20,
                      //   },
                      //   768: {
                      //     slidesPerView: 2,
                      //     spaceBetween: 40,
                      //   },
                      //   1024: {
                      //     slidesPerView: 2,
                      //     spaceBetween: 20,
                      //   },
                      // }}
                      modules={[Pagination, FreeMode]}
                      className="dt-swiper"
                    >
                        <SwiperSlide style={{width:'auto'}}><ItemCase className="w-[18em] h-[15em] sm:w-[25em] sm:h-[20em] md:w-[35em] md:h-[25em] lg:w-[50em]" /></SwiperSlide>
                        <SwiperSlide style={{width:'auto'}}><ItemCase className="w-[18em] h-[15em] sm:w-[25em] sm:h-[20em] md:w-[35em] md:h-[25em] lg:w-[50em]" /></SwiperSlide>
                        <SwiperSlide style={{width:'auto'}}><ItemCase className="w-[18em] h-[15em] sm:w-[25em] sm:h-[20em] md:w-[35em] md:h-[25em] lg:w-[50em]" /></SwiperSlide>
                        <SwiperSlide style={{width:'auto'}}><ItemCase className="w-[18em] h-[15em] sm:w-[25em] sm:h-[20em] md:w-[35em] md:h-[25em] lg:w-[50em]" /></SwiperSlide>
                        <SwiperSlide style={{width:'auto'}}><ItemCase className="w-[18em] h-[15em] sm:w-[25em] sm:h-[20em] md:w-[35em] md:h-[25em] lg:w-[50em]" more/></SwiperSlide>
                    </Swiper>
                    <div className="dt-dots flex items-center gap-1 md:gap-2 mt-5 cusor-pointer"></div>
                </div>
            </section>
        </>
    )
}