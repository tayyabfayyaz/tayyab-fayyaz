import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaRegCopyright } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";




function Footer(){
    return(
        <main>
            <footer className="w-full h-[400px] bg-black text-white hidden md:hidden lg:flex justify-around">
                <div className="about-part h-fit w-[300px] px-4 pt-10 pb-5">
                    <h3 className="text-white text-cente text-2xl font-bold mb-3 underline decoration-yellow-400">About</h3>
                    <p className="mt-12 text-gray-400 text-lg">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <span className="float-start ml-5 mt-10 text-2xl text-gray-400 cursor-pointer"><FaFacebook /></span>
                    <span className="float-start ml-5 mt-10 text-2xl text-gray-400 cursor-pointer"><FaInstagram /></span>
                    <span className="float-start ml-5 mt-10 text-2xl text-gray-400 cursor-pointer"><FaLinkedin /></span>
                    <span className="float-start ml-5 mt-10 text-2xl text-gray-400 cursor-pointer"><FaGithub /></span>
                </div>
                <div className="links-part h-fit w-[300px] px-4 pt-10 pb-5">
                    <h3 className="text-white text-cente text-2xl font-bold mb-3 underline decoration-yellow-400">Links</h3>
                    <ul className="text-lg text-gray-400 mt-12">
                        <li className="my-2 cursor-pointer flex gap-2"> <FaLongArrowAltRight /> Home</li>
                        <li className="my-2 cursor-pointer flex gap-2"> <FaLongArrowAltRight /> About</li>
                        <li className="my-2 cursor-pointer flex gap-2"> <FaLongArrowAltRight /> Contact</li>
                    </ul>
                </div>
                <div className="services-part h-fit w-[300px] px-4 pt-10 pb-5">
                    <h3 className="text-white text-cente text-2xl font-bold mb-3 underline decoration-yellow-400">Services</h3>
                    <ul className="text-lg text-gray-400 mt-12">
                        <li className="my-2 cursor-pointer flex gap-2"> <FaLongArrowAltRight /> Web Designing</li>
                        <li className="my-2 cursor-pointer flex gap-2"> <FaLongArrowAltRight /> Web Development</li>
                        <li className="my-2 cursor-pointer flex gap-2"> <FaLongArrowAltRight /> SEO</li>
                        <li className="my-2 cursor-pointer flex gap-2"> <FaLongArrowAltRight /> Android Development</li>
                        <li className="my-2 cursor-pointer flex gap-2"> <FaLongArrowAltRight /> More..</li>
                    </ul>
                </div>
                <div className="QnA-part h-fit w-[300px] px-4 pt-10 pb-5">
                    <h3 className="text-white text-cente text-2xl font-bold mb-3 underline decoration-yellow-400">QnAs</h3>
                    <ul className="text-lg text-gray-400 mt-12">
                        <li className="my-2 cursor-pointer flex gap-2"> <FaLocationDot /> House # 17, Sector 35/A, Karachi, Pakistan</li>
                        <li className="my-2 cursor-pointer flex gap-2"> <FaPhone /> +92 3182997727</li>
                        <li className="my-2 cursor-pointer flex gap-2"> <MdEmail /> fayyaztayyab@gmail.com</li>
                    </ul>
                </div>
            </footer>
                <div className="copyright-box flex justify-center items-center bg-black w-full h-[60px] text-white text-sm">
                    <h2 className="flex gap-3"><FaRegCopyright /> All rights reserve bt Tayyab Fayyaz | Design 2024 - 2025</h2>
                </div>
        </main>
    );
};

export default Footer;