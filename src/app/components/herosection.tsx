import Image from "next/image";

function HeroSection(){
    return(
        <main>
            <div className="hero-container w-full h-screen bg-zinc-900 block lg:flex">
                <div className="text-container w-full lg:w-2/4 pl-10 lg:pl-60 pt-20 lg:pt-40 ">
                    <p className="text-lg text-yellow-400 mb-8">Hello Everyone!!</p>
                    <span className="text-3xl lg:text-5xl text-white">I am</span>
                    <span className="text-3xl lg:text-5xl text-yellow-400"> Tayyab</span>
                    <p className="text-xl lg:text-3xl text-white">Fayyaz</p>
                    <span className="text-3xl lg:text-5xl text-yellow-400">A freelancer web</span>
                    <span className="text-xl lg:text-3xl text-white"> developer </span>
                    <span className="block text-3xl lg:text-5xl text-yellow-400">& designer</span>

                    <button className=" h-10 w-40 bg-yellow-400 text-zinc-900 font-semibold cursor-pointer my-8 rounded-md border-2 border-zinc-900 mr-8">HIRE ME</button>
                    <button className=" h-10 w-40 bg-zinc-900 text-yellow-400 font-semibold cursor-pointer my-8 rounded-md border-2 border-yellow-400">MY WORK</button>
                </div>

                <div className="image-container w-full lg:w-2/4 px-5 lg:px-20 py-10">
                    <div className="img-design" >
                        <Image 
                            src="/img1.png" 
                            alt="home" 
                            width={400} 
                            height={400} 
                            className="hidden lg:block -z-10 h-[550px] my-5 border-yellow-400 border-x-2 rounded-3xl shadow-lg shadow-yellow-200" 
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;