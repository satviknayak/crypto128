import { motion } from "framer-motion";

function Team() {
    return (
        <div id="team" className="my-10 gap-y-8 flex flex-col">
            <h2 className="text-3xl text-center text-[#c0fa49]">Our Members</h2>
            <h1 className="text-4xl sm:text-5xl text-center text-white" >Get to know amazing people</h1>
            <p className="text-gray-400 text-lg text-center max-w-[800px] mx-auto">Our mission is to be the global standard for modern crypto issuing, empowering builders to bring the most innovative products to the world.</p>
                <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10 mx-auto items-center justify-center">
                    <motion.div 
                    initial={{
                        opacity:0,
                        y:100,       
                    }}
                    whileInView={{
                        opacity:1,
                        y:0,
                        transition: {
                            duration:1,
                            type: 'spring',
                            damping: 12,
                            stiffness: 100,
                        },
                    }}
                    className="group w-fit relative flex flex-col justify-center">
                        <div className="flex w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-lg overflow-hidden group-hover:scale-105 transition-all duration-500 ease-in-out">
                            <img src="person1.png" alt="" className="object-cover object-center w-full h-full" />
                        </div>
                        <div className="text-center opacity-0 bottom translate-y-0 group-hover:opacity-100 group-hover:translate-y-1/4 transition-all duration-500 ease-in-out bg-gradient-to-tr from-[#c0fa49]/20 via-black to-black rounded-b-lg">
                            <h3 className="text-white text-xl sm:text-2xl">Tom Henks</h3>
                            <h5 className="text-md sm:text-lg text-gray-400">CEO of Crypto128</h5>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{
                        opacity:0,
                        y:100,       
                    }}
                    whileInView={{
                        opacity:1,
                        y:0,
                        transition: {
                            duration:1,
                            type: 'spring',
                            damping: 12,
                            stiffness: 100,
                        },
                    }}
                    className="group w-fit relative flex flex-col justify-center">
                        <div className="flex w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-lg overflow-hidden group-hover:scale-105 transition-all duration-500 ease-in-out">
                            <img src="person2.png" alt="" className="object-cover object-center w-full h-full" />
                        </div>
                        <div className="text-center opacity-0 bottom translate-y-0 group-hover:opacity-100 group-hover:translate-y-1/4 transition-all duration-500 ease-in-out bg-gradient-to-tr from-[#c0fa49]/20 via-black to-black rounded-b-lg">
                            <h3 className="text-white text-xl sm:text-2xl">Brooklyn Simmons</h3>
                            <h5 className="text-md sm:text-lg text-gray-400">Office Director</h5>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{
                        opacity:0,
                        y:100,       
                    }}
                    whileInView={{
                        opacity:1,
                        y:0,
                        transition: {
                            duration:1,
                            type: 'spring',
                            damping: 12,
                            stiffness: 100,
                        },
                    }}
                    className="group w-fit relative flex flex-col justify-center">
                        <div className="flex w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-lg overflow-hidden group-hover:scale-105 transition-all duration-500 ease-in-out">
                            <img src="person3.png" alt="" className="object-cover object-center w-full h-full" />
                        </div>
                        <div className="text-center opacity-0 bottom translate-y-0 group-hover:opacity-100 group-hover:translate-y-1/4 transition-all duration-500 ease-in-out bg-gradient-to-tr from-[#c0fa49]/20 via-black to-black rounded-b-lg">
                            <h3 className="text-white text-xl sm:text-2xl">Robert Fox</h3>
                            <h5 className="text-md sm:text-lg text-gray-400">Sales Manager</h5>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{
                        opacity:0,
                        y:100,       
                    }}
                    whileInView={{
                        opacity:1,
                        y:0,
                        transition: {
                            duration:1,
                            type: 'spring',
                            damping: 12,
                            stiffness: 100,
                        },
                    }}
                    className="group w-fit relative flex flex-col justify-center">
                        <div className="flex w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-lg overflow-hidden group-hover:scale-105 transition-all duration-500 ease-in-out">
                            <img src="person4.png" alt="" className="object-cover object-center w-full h-full" />
                        </div>
                        <div className="text-center opacity-0 bottom translate-y-0 group-hover:opacity-100 group-hover:translate-y-1/4 transition-all duration-500 ease-in-out bg-gradient-to-tr from-[#c0fa49]/20 via-black to-black rounded-b-lg">
                            <h3 className="text-white text-xl sm:text-2xl">Albert Flores</h3>
                            <h5 className="text-md sm:text-lg text-gray-400">Blockchain Developer</h5>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{
                        opacity:0,
                        y:100,       
                    }}
                    whileInView={{
                        opacity:1,
                        y:0,
                        transition: {
                            duration:1,
                            type: 'spring',
                            damping: 12,
                            stiffness: 100,
                        },
                    }}
                    className="group w-fit relative flex flex-col justify-center">
                        <div className="flex w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-lg overflow-hidden group-hover:scale-105 transition-all duration-500 ease-in-out">
                            <img src="person5.png" alt="" className="object-cover object-center w-full h-full" />
                        </div>
                        <div className="text-center opacity-0 bottom translate-y-0 group-hover:opacity-100 group-hover:translate-y-1/4 transition-all duration-500 ease-in-out bg-gradient-to-tr from-[#c0fa49]/20 via-black to-black rounded-b-lg">
                            <h3 className="text-white text-xl sm:text-2xl">Annette Black</h3>
                            <h5 className="text-md sm:text-lg text-gray-400">UI/UX Designer</h5>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{
                        opacity:0,
                        y:100,       
                    }}
                    whileInView={{
                        opacity:1,
                        y:0,
                        transition: {
                            duration:1,
                            type: 'spring',
                            damping: 12,
                            stiffness: 100,
                        },
                    }}
                    className="group w-fit relative flex flex-col justify-center">
                        <div className="flex w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-lg overflow-hidden group-hover:scale-105 transition-all duration-500 ease-in-out">
                            <img src="person6.png" alt="" className="object-cover object-center w-full h-full" />
                        </div>
                        <div className="text-center opacity-0 bottom translate-y-0 group-hover:opacity-100 group-hover:translate-y-1/4 transition-all duration-500 ease-in-out bg-gradient-to-tr from-[#c0fa49]/20 via-black to-black rounded-b-lg">
                            <h3 className="text-white text-xl sm:text-2xl">Courtney Henry</h3>
                            <h5 className="text-md sm:text-lg text-gray-400">Software Engineering</h5>
                        </div>
                    </motion.div>
                </motion.div>
        </div>
    )
}
export default Team;