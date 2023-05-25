import { motion } from 'framer-motion';
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi';
import {Autoplay,Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function Testimonials() {
    return (
        <div id='testimonials' className='text-white mt-10 mb-20'>
            <h1 className='text-[#c0fa49] text-4xl text-center'>Testimonials</h1>
            <motion.div 
            transition={{duration:0.5}}
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            className='flex max-w-[1000px] w-full mx-auto px-8 my-10 relative'>
            <Swiper
                modules={[Autoplay,Navigation]}
                autoplay={true}
                speed={1000}
                loop={true}
                navigation={{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev'
                }}
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <div className='flex flex-wrap w-full rounded-lg'>
                        <div className='relative flex w-full sm:w-[45%] h-fit p-10'>
                            <img src="test1.png" alt="" className='max-w-[220px] mx-auto' />
                            <img src="Ellipse9.svg" alt="" className='absolute bottom-0 left-24 sm:left-[7%] w-28' />
                        </div>
                        <div className='flex flex-col w-full sm:w-[55%] gap-y-8'>
                            <h2 className='text-4xl sm:text-5xl'>What our customers are saying</h2>
                            <p className='text-white/70 text-lg'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suspendisse lectus erat curabitur at sit arcu luctus augue. Sceleriaque purus placerat scelerisque quis venenatis sollicitudin. Fermentum habitant proin iaculis tortor gravida vulputate sed justo.”</p>
                            <div>
                                <h5 className='text-xl sm:text-2xl'>Jassir Pingle</h5>
                                <span className='text-lg sm:text-xl text-gray-400'>Designer of Leo</span>
                            </div>    
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-wrap w-full rounded-lg'>
                        <div className='relative flex w-full sm:w-[45%] h-fit p-10'>
                            <img src="test2.png" alt="" className='max-w-[220px] mx-auto' />
                            <img src="Ellipse9.svg" alt="" className='absolute bottom-0 left-24 sm:left-[7%] w-28' />
                        </div>
                        <div className='flex flex-col w-full sm:w-[55%] gap-y-8'>
                            <h2 className='text-4xl sm:text-5xl'>What our customers are saying</h2>
                            <p className='text-white/70 text-lg'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suspendisse lectus erat curabitur at sit arcu luctus augue. Sceleriaque purus placerat scelerisque quis venenatis sollicitudin. Fermentum habitant proin iaculis tortor gravida vulputate sed justo.”</p>
                            <div>
                                <h5 className='text-xl sm:text-2xl'>Jens Leu</h5>
                                <span className='text-lg sm:text-xl text-gray-400'>Photographer</span>
                            </div>    
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-wrap w-full rounded-lg'>
                        <div className='relative flex w-full sm:w-[45%] h-fit p-10'>
                            <img src="test4.png" alt="" className='max-w-[220px] mx-auto' />
                            <img src="Ellipse9.svg" alt="" className='absolute bottom-0 left-24 sm:left-[7%] w-28' />
                        </div>
                        <div className='flex flex-col w-full sm:w-[55%] gap-y-8'>
                            <h2 className='text-4xl sm:text-5xl'>What our customers are saying</h2>
                            <p className='text-white/70 text-lg'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suspendisse lectus erat curabitur at sit arcu luctus augue. Sceleriaque purus placerat scelerisque quis venenatis sollicitudin. Fermentum habitant proin iaculis tortor gravida vulputate sed justo.”</p>
                            <div>
                                <h5 className='text-xl sm:text-2xl'>Kathryn Murphy</h5>
                                <span className='text-lg sm:text-xl text-gray-400'>CEO of Stripe</span>
                            </div>    
                        </div>
                    </div>
                </SwiperSlide>
                <FiArrowLeftCircle className='absolute z-[100] bottom-0 right-20 cursor-pointer swiper-button-prev text-5xl text-[#c0fa49]' />
                <FiArrowRightCircle className='absolute z-[100] bottom-0 right-0 cursor-pointer swiper-button-next text-5xl text-[#c0fa49]' />
            </Swiper>
                
            </motion.div>
        </div>
    )
}

export default Testimonials;