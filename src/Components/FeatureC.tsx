import { motion } from "framer-motion";

function FeatureC() {
    return (
        <div className='flex w-full h-fit mb-10'>
            <motion.div 
            transition={{duration:0.5}}
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            className="flex flex-wrap w-full max-w-[1000px] mx-auto my-10 gap-y-6">
            <div className="flex flex-col w-full sm:w-[60%] px-8 sm:px-6 gap-y-4 py-10">
                <h1 className="text-white text-4xl">Completely leverage other products</h1>
                <p className="text-gray-400">Dramatically reintermediate effective applications after high-payoff core competence.Authoritatively optimize collaborative benefits</p>
                <button className="text-black text-lg px-6 py-2 bg-[#c9fa49] w-fit rounded-full mt-6">
                    Get Started
                </button>
            </div>
            <div className="w-[50%] sm:w-[40%] mx-auto sm:px-8 h-fit">
                <img src="leverage.png" alt=""/>
            </div>
            </motion.div>
        </div>
    )
}

export default FeatureC;