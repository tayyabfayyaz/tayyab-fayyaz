import Image from "next/image";

function ProjectSection(){
    return(
        <main>
            <div className="project-container w-full h-fit py-10 bg-zinc-900 px-3 md:px-10 lg:px-0">
                <h2 className="text-center text-5xl font-extrabold text-white pt-10 -mb-7">My Projects</h2>
                <div className="heading w-full h-20 text-center text-6xl md:text-7xl lg:text-9xl text-white -pt-20 font-extrabold text-opacity-20 -z-10">
                    Projects
                </div>
                <p className="text-xl text-white text-center mt-20">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <div className="project-img-box w-full px-2 lg:px-40">
                    <div className="project-img w-full h-fit my-10 px-2 lg:py-2 block lg:flex">
                        <div className="img-box-1 relative mr-5 my-5 lg:my-0">
                            <Image src="/img2.jpg" alt="Project" width={400} height={400} className="mr-0 lg:mr-5 h-[300px] w-[400px] object-cover" />
                            <div className="hover-text absolute inset-0 bg-yellow-400 bg-opacity-50 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300 py-20">
                                <p className="text-2xl text-center font-semibold ">Furniture & aplencies</p>
                                <button className="bg-yellow-400 rounded-md w-40 h-10 block mx-auto my-10 border-2 text-xl font-semibold hover:border-black">Visit</button>
                            </div>
                        </div>
                        
                        <div className="img-box-2 relative mr-5">
                            <Image src="/img3.jpg" alt="Project" width={400} height={400} className="mr-0 lg:mr-5 h-[300px] w-[600px] object-cover" />
                            <div className="hover-text absolute inset-0 bg-yellow-400 bg-opacity-50 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300 py-20">
                                <p className="text-2xl text-center font-semibold ">Real Time Chat Box Web</p>
                                <button className="bg-yellow-400 rounded-md w-40 h-10 block mx-auto my-10 border-2 text-xl font-semibold hover:border-black">Visit</button>
                            </div>
                        </div>
                    </div>

                    <div className="project-img w-full h-fit lg:my-10 px-2 lg:py-2 block lg:flex">
                        <div className="img-box-1 relative mr-5 my-5 lg:my-0">
                            <Image src="/img4.jpg" alt="Project" width={400} height={400} className="mr-0 lg:mr-5 h-[300px] w-[600px] object-cover" />
                            <div className="hover-text absolute inset-0 bg-yellow-400 bg-opacity-50 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300 py-20">
                                <p className="text-2xl text-center font-semibold ">Android Application</p>
                                <button className="bg-yellow-400 rounded-md w-40 h-10 block mx-auto my-10 border-2 text-xl font-semibold hover:border-black">Visit</button>
                            </div>
                        </div>
                        
                        <div className="img-box-2 relative mr-5 my-5 lg:my-0">
                            <Image src="/img5.jpg" alt="Project" width={400} height={400} className="mr-0 lg:mr-5 h-[300px] w-[300px] object-cover" />
                            <div className="hover-text absolute inset-0 bg-yellow-400 bg-opacity-50 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300 py-20">
                                <p className="text-2xl text-center font-semibold ">Traveling Website</p>
                                <button className="bg-yellow-400 rounded-md w-40 h-10 block mx-auto my-10 border-2 text-xl font-semibold hover:border-black">Visit</button>
                            </div>
                        </div>
                    </div>

                    <div className="project-img w-full h-fit my-10 px-2 lg:py-2 block lg:flex">
                        <div className="img-box-1 relative mr-5">
                            <Image src="/img6.jpg" alt="Project" width={400} height={400} className="mr-0 lg:mr-5 h-[300px] w-[900px] object-cover" />
                            <div className="hover-text absolute inset-0 bg-yellow-400 bg-opacity-50 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300 py-20">
                                <p className="text-2xl text-center font-semibold ">Complete Office Management System</p>
                                <button className="bg-yellow-400 rounded-md w-40 h-10 block mx-auto my-10 border-2 text-xl font-semibold hover:border-black">Visit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectSection;