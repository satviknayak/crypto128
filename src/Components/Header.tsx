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
        <div id="header" className='flex flex-col w-full min-h-screen gap-y-12 relative'>
            <motion.h1
            className='text-white font-semibold max-w-[800px] px-12 sm:px-20 mt-32 mx-auto text-4xl sm:text-7xl text-center'
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
            className='text-gray-500 max-w-[800px] mx-auto px-12 sm:px-20 text-center text-lg sm:text-xl'>
            Explore the crypto world, buy and sell crypto coints easily, trusted Crypto 128 to be your crypto market partner.
            </motion.p>
            
            <motion.button 
            variants={moveUp}
            transition={{delay:0.5}}
            initial="hidden"
            whileInView="visible"
            className='text-black sm:text-2xl px-6 sm:px-8 py-2 sm:py-3 bg-[#c9fa49] w-fit rounded-full mx-auto'>
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
        </div>
    )
}

export default Header;