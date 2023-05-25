import { motion } from "framer-motion";
function FeatureA() {
    return (
        <div className='flex w-full h-fit'>
            <motion.div 
            transition={{duration:0.5}}
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            className="flex flex-wrap w-full max-w-[1000px] mx-auto mt-20 mb-10 gap-y-10">
            <div className="flex flex-col w-full sm:w-[60%] px-8 sm:px-6 gap-y-2">
                <h2 className="text-[#c0fa49] text-2xl mb-6">Our Feature</h2>
                <h1 className="text-white text-4xl">Viewing long-term and short-term forecast</h1>
                <p className="text-gray-400">Add funds to your cryptocurrency account to start trading cryptocurrencies. You can add funds using different payment methods.</p>
                <button className="text-black text-lg px-6 py-2 bg-[#c9fa49] w-fit rounded-full mt-10">
                    Get Started
                </button>
            </div>
            <div className="w-[50%] sm:w-[40%] mx-auto sm:px-8">
                <img src="Feature.png" alt="" />
            </div>
            </motion.div>
        </div>
    )
}

export default FeatureA;