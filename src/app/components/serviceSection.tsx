import { MdOutlineDesignServices, MdOutlinePivotTableChart } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GiLightBulb } from "react-icons/gi";



function ServiceSection(){
    return(
        <main>
            <div className="Serices-container w-full h-fit py-10 bg-zinc-900">
                <h2 className="text-center text-5xl font-extrabold text-white pt-10 -mb-7">Our Services</h2>
                <div className="heading w-full h-20 text-center text-7xl lg:text-9xl text-white -pt-20 font-extrabold text-opacity-20 -z-10">
                    Services
                </div>
                <p className="text-xl text-white text-center mt-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <div className="service-content lg:flex justify-around py-20">
                    <div className="services-card w-[300px] h-[300px] text-center pt-28 bg-black text-white text-3xl block lg:flex flex-col justify-center items-center rounded-md mx-auto lg:mx-0 my-10 lg:my-0 cursor-pointer hover:shadow-md hover:shadow-yellow-400">
                        <MdOutlineDesignServices className="text-5xl block mx-auto "/>
                        <span>Web Design</span>
                    </div>

                    <div className="services-card w-[300px] h-[300px] text-center pt-28 bg-black text-white text-3xl block lg:flex flex-col justify-center items-center rounded-md mx-auto lg:mx-0 my-10 lg:my-0 cursor-pointer hover:shadow-md hover:shadow-yellow-400">
                        <MdOutlinePivotTableChart className="text-5xl block mx-auto "/>
                        <span>SEO</span>
                    </div>

                    <div className="services-card w-[300px] h-[300px] text-center pt-28 bg-black text-white text-3xl block lg:flex flex-col justify-center items-center rounded-md mx-auto lg:mx-0 my-10 lg:my-0 cursor-pointer hover:shadow-md hover:shadow-yellow-400">
                        <LiaLaptopCodeSolid className="text-5xl block mx-auto "/>
                        <span>Web Development</span>
                    </div>

                    <div className="services-card w-[300px] h-[300px] text-center pt-28 bg-black text-white text-3xl block lg:flex flex-col justify-center items-center rounded-md mx-auto lg:mx-0 my-10 lg:my-0 cursor-pointer hover:shadow-md hover:shadow-yellow-400">
                        <GiLightBulb className="text-5xl block mx-auto "/>
                        <span>New Ideas</span>
                    </div>
                </div>
            </div>
        </main>
    );
};


export default ServiceSection;