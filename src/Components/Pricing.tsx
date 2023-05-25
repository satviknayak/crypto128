import {GiCheckMark,GiCrossMark} from  'react-icons/gi'
import { motion } from 'framer-motion';

function Pricing() {
    return (
        <div id='pricing' className="w-full flex flex-col text-white gap-y-10 mb-20">
            <h1 className="text-4xl sm:text-5xl text-center" >Affordable Pricing</h1>
            <p className="text-gray-400 text-lg text-center max-w-[800px] mx-auto">A full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending and trading solutions tailored to your needs.</p>
            <motion.div 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            className="flex flex-wrap w-full items-center justify-center gap-8 mt-8" >
                <div className="flex flex-col w-full sm:max-w-[400px] max-w-[350px] rounded-xl overflow-hidden border-2 border-[#c0fa49]/20 ">
                    <h1 className="from-[#c0fa49]/20 to-black bg-gradient-to-tr text-center py-10 text-4xl">
                        Free {' '}
                        <span className="text-xl">Forever</span>
                    </h1>
                    <ul className="flex flex-col text-left text-lg px-10 my-10 gap-y-4">
                        <li className='flex'><GiCheckMark className='my-auto mx-4 text-xl text-lime-500'/><span>Searchable archive message up to 10K</span></li>
                        <li className='flex'><GiCrossMark className='my-auto mx-4 text-xl text-red-500'/><span className="text-gray-600">10 appa or service integrations</span></li>
                        <li className='flex'><GiCrossMark className='my-auto mx-4 text-xl text-red-500'/><span className="text-gray-600">5GB total file storage</span></li>
                        <li className='flex'><GiCrossMark className='my-auto mx-4 text-xl text-red-500'/><span className="text-gray-600">Free Updated per month</span></li>
                    </ul>
                    <button className="px-8 py-4 border-2 border-[#c0fa49] text-[#c0fa49] hover:bg-[#c0fa49] hover:text-black w-fit mx-auto mb-10 rounded-lg transition-all duration-500 ease-in-out">Read More</button>
                </div>

                <div className="flex flex-col w-full sm:max-w-[400px] max-w-[350px] rounded-xl overflow-hidden border-2 border-[#c0fa49]/20 ">
                    <h1 className="from-[#c0fa49]/20 to-black bg-gradient-to-tr text-center py-10 text-4xl">
                        $20.00 {' '}
                        <span className="text-lg">PER USER/MONTH</span>
                    </h1>
                    <ul className="flex flex-col text-left text-lg px-10 my-10 gap-y-4">
                        <li className='flex'><GiCheckMark className='my-auto mx-4 text-xl text-lime-500'/><span>Searchable archive message up to 10K</span></li>
                        <li className='flex'><GiCheckMark className='my-auto mx-4 text-xl text-lime-500'/><span>10 appa or service integrations</span></li>
                        <li className='flex'><GiCrossMark className='my-auto mx-4 text-xl text-red-500'/><span className="text-gray-600">5GB total file storage</span></li>
                        <li className='flex'><GiCrossMark className='my-auto mx-4 text-xl text-red-500'/><span className="text-gray-600">Free Updated per month</span></li>
                    </ul>
                    <button className="px-8 py-4 border-2 border-[#c0fa49] hover:text-[#c0fa49] hover:bg-black bg-[#c0fa49] text-black w-fit mx-auto mb-10 rounded-lg transition-all duration-500 ease-in-out">Read More</button>
                </div>

                <div className="flex flex-col w-full sm:max-w-[400px] max-w-[350px] rounded-xl overflow-hidden border-2 border-[#c0fa49]/20 ">
                    <h1 className="from-[#c0fa49]/20 to-black bg-gradient-to-tr text-center py-10 text-4xl">
                        $50.00 {' '}
                        <span className="text-lg">PER USER/MONTH</span>
                    </h1>
                    <ul className="flex flex-col text-left text-lg px-10 my-10 gap-y-4">
                        <li className='flex'><GiCheckMark className='my-auto mx-4 text-xl text-lime-500'/><span>Searchable archive message up to 10K</span></li>
                        <li className='flex'><GiCheckMark className='my-auto mx-4 text-xl text-lime-500'/><span>10 appa or service integrations</span></li>
                        <li className='flex'><GiCheckMark className='my-auto mx-4 text-xl text-lime-500'/><span>5GB total file storage</span></li>
                        <li className='flex'><GiCheckMark className='my-auto mx-4 text-xl text-lime-500'/><span>Free Updated per month</span></li>
                    </ul>
                    <button className="px-8 py-4 border-2 border-[#c0fa49] text-[#c0fa49] hover:bg-[#c0fa49] hover:text-black w-fit mx-auto mb-10 rounded-lg transition-all duration-500 ease-in-out">Read More</button>
                </div>
            </motion.div>
        </div>
    )
}

export default Pricing;