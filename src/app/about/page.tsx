import Image from "next/image";
import ServiceSection from "../components/serviceSection";

function AboutPage(){
    return(
        <main>
            <div className="about-container w-full h-fit bg-zinc-900 py-10 px-5 lg:px-0">
                <h2 className="text-center text-5xl font-extrabold text-white pt-10 -mb-7">My About</h2>
                <div className="heading w-full h-20 text-center text-7xl lg:text-9xl text-white -pt-20 font-extrabold text-opacity-20 -z-10">
                    About
                </div>
                <p className="text-xl text-white text-center mt-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>

                <div className="content-box block lg:flex lg:pt-20">
                    <div className="about-img w-full px-5 lg:w-2/4 lg:px-20">
                        <Image 
                            src="/tayyab.png" 
                            alt="home" 
                            width={400} 
                            height={400} 
                            className="block lg:block -z-10 h-[550px] my-5 border-yellow-400 border-x-2 rounded-3xl shadow-lg shadow-yellow-200" 
                        />
                    </div>
                    <div className="personal-details w-full lg:w-2/4 flex">
                        <div className="right-text w-1/4 lg:w-1/4">
                            <ul>
                                <li className="text-lg lg:text-2xl text-white my-8">Name</li>
                                <li className="text-lg lg:text-2xl text-white my-8">DoF</li>
                                <li className="text-lg lg:text-2xl text-white my-8">Address</li>
                                <li className="text-lg lg:text-2xl text-white my-8">Zip Code</li>
                                <li className="text-lg lg:text-2xl text-white my-8">Email</li>
                                <li className="text-lg lg:text-2xl text-white my-8">Phone No.</li>
                            </ul>
                        </div>
                        <div className="left-text w-2/4 lg:w-3/4">
                            <ul>
                                <li className="text-lg lg:text-2xl text-gray-400 my-8">Tayyab Fayyaz</li>
                                <li className="text-lg lg:text-2xl text-gray-400 my-8">16-Feburary-2006</li>
                                <li className="text-lg lg:text-2xl text-gray-400 my-8">Karachi, Pakistan</li>
                                <li className="text-lg lg:text-2xl text-gray-400 my-8">7400</li>
                                <li className="text-lg lg:text-2xl text-gray-400 my-8">fayyaztayyab931@gmail.com</li>
                                <li className="text-lg lg:text-2xl text-gray-400 my-8">+92 3182997727</li>
                            </ul>
                            <button className="h-10 w-40 bg-yellow-400 text-zinc-900 font-semibold cursor-pointer my-8 rounded-md border-2 border-zinc-900 mr-8">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceSection />
        </main>
    );
};

export default AboutPage;