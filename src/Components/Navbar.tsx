import {useState} from 'react';
import {HiOutlineMenu} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';

function Navbar() {

    const [viewNav,setViewNav] = useState(false);

    return (
        <div className="fixed top-0 left-0 flex sm:flex-row flex-col w-full h-fit sm:items-center px-4 bg-black/20 backdrop-blur-lg sm:justify-between text-white z-[999]" >
            <img src="Crypto128.svg" alt="logo" className="w-20" />
            <div className={`${viewNav?'flex pb-10':'hidden sm:flex'} mr-0 sm:mr-16 gap-x-8 gap-y-4 md:text-xl sm:text-lg text-xl flex-col sm:flex-row text-center justify-center`}>
                <a className='text-gray-400 hover:text-white active:text-[#c0fa49] focus:text-[#c0fa49]' href="#home">Home</a>
                <a className='text-gray-400 hover:text-white active:text-[#c0fa49] focus:text-[#c0fa49]' href="#features">Features</a>
                <a className='text-gray-400 hover:text-white active:text-[#c0fa49] focus:text-[#c0fa49]' href="#team">Team</a>
                <a className='text-gray-400 hover:text-white active:text-[#c0fa49] focus:text-[#c0fa49]' href="#testimonials">Testimonials</a>
                <a className='text-gray-400 hover:text-white active:text-[#c0fa49] focus:text-[#c0fa49]' href="#pricing">Pricing</a>
            </div>
            <div className='flex sm:hidden absolute top-12 right-12 text-5xl'>
                <MdOutlineClose className={`${viewNav?'flex':'hidden'}`} onClick={()=>setViewNav(!viewNav)} />
                <HiOutlineMenu className={`${viewNav?'hidden':'flex'}`} onClick={()=>setViewNav(!viewNav)} />
            </div>
        </div>
    )
}

export default Navbar;