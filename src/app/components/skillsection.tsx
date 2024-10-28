function SkillSection(){
    return(
        <main>
            <div className="skills-container w-full h-fit py-10 px-5 lg:px-0 lg:h-screen bg-zinc-900 ">
                <h2 className="text-center text-5xl font-extrabold text-white pt-10 -mb-7">My Skill</h2>
                <div className="heading w-full h-20 text-center text-9xl text-white -pt-20 font-extrabold text-opacity-20 -z-10">
                    Skills
                </div>
                <p className="text-xl text-white text-center mt-20">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <div className="bar-container block lg:flex justify-around lg:mt-10 px-5 w-full">
                    <div className="skills-bar mt-10 lg:mt-0">
                        <span className="text-xl text-white text-start mb-3">CSS</span>
                        <span className="text-xl text-white text-end mb-3 ml-[260px] lg:ml-[340px]">95%</span>
                        <div className="bar-fill-part w-[350px] lg:w-[450px] h-4 bg-gray-600 rounded-lg">
                            <div className="empty-bar-part w-[330px] lg:w-[410px] h-4 bg-yellow-400 rounded-lg"></div>
                        </div>
                    </div>

                    <div className="skills-bar mt-10 lg:mt-0">
                        <span className="text-xl text-white text-start mb-3">HTML</span>
                        <span className="text-xl text-white text-end mb-3 ml-[220px] lg:ml-[320px]">90%</span>
                        <div className="bar-fill-part w-[350px] lg:w-[450px] h-4 bg-gray-600 rounded-lg">
                            <div className="empty-bar-part w-[300px] lg:w-[400px] h-4 bg-yellow-400 rounded-lg"></div>
                        </div>
                    </div>
                </div>

                <div className="bar-container block lg:flex justify-around lg:mt-10 px-5 w-full">
                    <div className="skills-bar mt-10 lg:mt-0">
                        <span className="text-xl text-white text-start mb-3">JAVASCRIPT</span>
                        <span className="text-xl text-white text-end mb-3 ml-[150px] lg:ml-[200px]">80%</span>
                        <div className="bar-fill-part w-[350px] lg:w-[450px] h-4 bg-gray-600 rounded-lg">
                            <div className="empty-bar-part w-[280px] lg:w-[320px] h-4 bg-yellow-400 rounded-lg"></div>
                        </div>
                    </div>

                    <div className="skills-bar mt-10 lg:mt-0">
                        <span className="text-xl text-white text-start mb-3">TAILWINDCSS</span>
                        <span className="text-xl text-white text-end mb-3 ml-[160px] lg:ml-[210px]">85%</span>
                        <div className="bar-fill-part w-[350px] lg:w-[450px] h-4 bg-gray-600 rounded-lg">
                            <div className="empty-bar-part w-[290px] lg:w-[350px] h-4 bg-yellow-400 rounded-lg"></div>
                        </div>
                    </div>
                </div>

                <div className="bar-container block lg:flex justify-around lg:mt-10 px-5 w-full">
                    <div className="skills-bar mt-10 lg:mt-0">
                        <span className="text-xl text-white text-start mb-3">SEO</span>
                        <span className="text-xl text-white text-end mb-3 ml-[180px] lg:ml-[220px]">75%</span>
                        <div className="bar-fill-part w-[350px] lg:w-[450px] h-4 bg-gray-600 rounded-lg">
                            <div className="empty-bar-part w-[230px] lg:w-[280px] h-4 bg-yellow-400 rounded-lg"></div>
                        </div>
                    </div>

                    <div className="skills-bar mt-10 lg:mt-0 mb-20 lg:mb-0">
                        <span className="text-xl text-white text-start mb-3">PHP</span>
                        <span className="text-xl text-white text-end mb-3 ml-[150px] lg:ml-[190px]">60%</span>
                        <div className="bar-fill-part w-[350px] lg:w-[450px] h-4 bg-gray-600 rounded-lg">
                            <div className="empty-bar-part w-[200px] lg:w-[250px] h-4 bg-yellow-400 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SkillSection;