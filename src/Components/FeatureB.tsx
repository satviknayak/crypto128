import { motion } from "framer-motion";

function FeatureB() {
    return (
        <div className='flex w-full h-fit flex-wrap '>
            <motion.div 
            transition={{duration:0.5}}
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            className="flex flex-wrap flex-col-reverse sm:flex-row w-full max-w-[1000px] mx-auto my-10 gap-y-10">
            <div className="w-[50%] sm:w-[40%] mx-auto sm:px-8">
                <img src="child2.png" alt="" />
            </div>
            <div className="flex flex-col w-full sm:w-[60%] px-8 sm:px-6 gap-y-2 pt-10">
                <h1 className="text-white text-4xl">More than you think</h1>
                <p className="text-gray-400">Add funds to your cryptocurrency account to start trading cryptocurrencies. You can add funds using different payment methods.</p>
                <div className="flex w-full mt-6" >
                    <div>
                        <h2 className="text-[#c0fa49] text-xl" >Productivity</h2>
                        <p className="text-gray-600" >Dramatically reintermediate effective applications after high-payoff core competencies.</p>
                    </div>
                    <div>
                        <h2 className="text-[#c0fa49] text-xl" >Synchronize</h2>
                        <p className="text-gray-600">Dramatically reintermediate effective applications after high-payoff core competencies.</p>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default FeatureB;