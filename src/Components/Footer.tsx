import {BsInstagram,BsLinkedin,BsBehance,BsFacebook} from 'react-icons/bs';

function Footer() {
    return (
        <div>
            <div className="relative h-48 border-[#c0fa49] border-t-2 border-b-2">
                <div className="absolute top-0 left-10 flex gap-x-8 text-[#c0fa49] items-end text-2xl sm:text-4xl cursor-pointer">
                    <img src="Crypto128.svg" alt="" className="w-12 sm:w-20" />
                    <BsInstagram/>
                    <BsFacebook/>
                    <BsLinkedin/>
                    <BsBehance/>
                </div>
            </div>
            <div className="h-16 text-gray-400 text-xs sm:text-lg text-center py-4">
            © Satvik S Nayak. All Rights Reserved 2023. Powered by ReactJS . TailwindCSS
            </div>
        </div>
    )
}

export default Footer;