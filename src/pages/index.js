import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import HeroSection from '@/sections/hero'
import CaseSection from '@/sections/case'

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper"
import BlogSection from '@/sections/blog'
import TitleSection from '@/sections/title'
import ReactFullpage from '@fullpage/react-fullpage'
import Footer from '@/sections/footer'

export default function Home() {
    useEffect(() => {
       
    })

    return (
        <>
            <div className="flex items-center justify-between gap-4 p-6 fixed top-0 right-0 left-0 z-30">
                <Link href={'/'} className='flex items-center gap-3'>
                    <Image src={`/assets/image/Logo.svg`} width={40} height={40} className='w-[40px] h-[40px]' />
                    <div className="text-xl hidden"><span className="font-medium">Dev</span><span className="font-medium text-purple-600">tektif</span></div>
                </Link>
                <div className="inline-flex items-center justify-center cursor-pointer">
                    <Icon icon="fluent:text-align-justify-low-24-filled" className='w-[1em] h-[1em] text-3xl' />
                </div>
            </div>
            <div className="h-screen">
                <ReactFullpage
                scrollOverflow={true}
                render={({ state, fullpageApi }) => {
                    return(
                        <>
                            <div className="fullpage-wrapper">
                                <div className="section"><HeroSection /></div>
                                {/* <div className="section"><TitleSection first="The" last="Case's" align='center' /></div> */}
                                <div className="section"><CaseSection /></div>
                                {/* <div className="section"><TitleSection first="Learn" last="The Investigate" align='center' /></div> */}
                                <div className="section"><BlogSection /></div>
                                <div className="section"><Footer /></div>
                            </div>
                        </>
                    );
                }}
                />
                    
            </div>
            
            
        </>
    )
}
