import { motion } from "framer-motion";

function Header() {

    const line = "Trusted platform for crypto investments"
    const sentence = {
        hidden:{opacity:1},
        visible:{
            opacity:1,
            transition:{
                delay:1,
                staggerChildren:0.05,
            },
        },
    }
    const word = {
        hidden:{
            opacity:0,
            y:100,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
              },        
        },
        visible:{
            opacity:1,
            y:0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
              },        
        }
    }
    const moveUp = {
        hidden:{
            opacity:0,
            y:100,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
              },        
        },
        visible:{
            opacity:1,
            y:0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
              },        
        }
    }

    return (
        <div id="home" className='flex flex-col w-full min-h-screen gap-y-12 relative'>
            <motion.h1
            className='text-white font-semibold max-w-[800px] px-12 sm:px-20 mt-44 mx-auto text-4xl sm:text-7xl text-center z-[99]'
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            >
                {line.split("").map((el,index)=>(
                    <motion.span key={index} variants={word} >
                        {el}
                    </motion.span>
                ))}
            </motion.h1>

            <motion.p
            variants={moveUp}
            transition={{delay:0.5}}
            initial="hidden"
            whileInView="visible"
            className='text-gray-500 max-w-[800px] mx-auto px-12 sm:px-20 text-center text-lg sm:text-xl z-[99]'>
            Explore the crypto world, buy and sell crypto coints easily, trusted Crypto 128 to be your crypto market partner.
            </motion.p>
            
            <motion.button 
            variants={moveUp}
            transition={{delay:0.5}}
            initial="hidden"
            whileInView="visible"
            className='text-black hover:text-[#c0fa49] border-2 border-[#c0fa49] sm:text-2xl px-6 sm:px-8 py-2 sm:py-3 bg-[#c9fa49] hover:bg-black w-fit rounded-full mx-auto transition-all duration-500 ease-in-out z-[99]'>
                Get Started
            </motion.button>
            
            <motion.div 
            variants={moveUp}
            transition={{delay:0.75}}
            initial="hidden"
            whileInView="visible"
            className='max-w-[600px] h-fit px-16 mx-auto'>
                <img src="header_img.svg" alt="" className='object-cover object-center z-[100]' />
            </motion.div>
            
            <div className="flex relative w-full h-16 bg-[#c0fa49]/50 mb-20">
                <div className="flex w-full h-16 bg-[#c0fa49] -rotate-3 -skew-x-3"></div>
            </div>

            <div className='absolute bottom-20 left-1/2 -translate-x-1/2 opacity-10 w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] rounded-full bg-lime-300 blur-3xl z-[10]'></div>

            <motion.div 
            animate={{y:[20,6,20],x:[8,22,8]}}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity
            }}
            className="absolute w-fit top-[200px] left-[15px] sm:left-[150px]"><img src="triangle1.png" alt="" className="w-10"  /></motion.div>
            <motion.div 
            animate={{y:[60,20,-30,20,60],x:[-8,16,40,16,-8]}}
            transition={{
                duration: 10,
                ease: "easeInOut",
                times: [0,0.25, 0.5,0.75, 1],
                repeat: Infinity,
            }}
            className="absolute w-fit top-[400px] left-[25px] sm:left-[300px]"><img src="circle1.png" alt=""  className="w-10" /></motion.div>
            <motion.div 
            animate={{y:[20,6,20],x:[8,22,8]}}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity
            }}
            className="absolute w-fit top-[700px] left-[10px] sm:left-[200px]"><img src="square1.png" alt=""  className="w-10" /></motion.div>
            <motion.div 
            animate={{y:[20,6,20],x:[8,22,8]}}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity
            }}
            className="absolute w-fit top-[150px] right-[15px] sm:right-[200px]"><img src="triangle2.png" alt=""  className="w-10" /></motion.div>
            <motion.div 
            animate={{y:[20,6,20],x:[8,22,8]}}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity
            }}
            className="absolute w-fit top-[450px] right-[10px] sm:right-[250px]"><img src="circle2.png" alt=""  className="w-10" /></motion.div>
            <motion.div 
            animate={{y:[60,20,-30,20,60],x:[-8,16,40,16,-8]}}
            transition={{
                duration: 10,
                ease: "easeInOut",
                times: [0,0.25, 0.5,0.75, 1],
                repeat: Infinity,
            }}
            className="absolute w-fit top-[650px] right-[20px] sm:right-[100px]"><img src="square2.png" alt=""  className="w-10" /></motion.div>


        </div>
    )
}

export default Header;