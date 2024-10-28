import Image from "next/image";

function BlogSection(){
    return(
        <main>
            <div className="blog-container w-full h-fit py-10 px-5 lg:px-0 bg-zinc-900 ">
                <h2 className="text-center text-5xl font-extrabold text-white pt-10 -mb-7">My Blogs</h2>
                <div className="heading w-full h-20 text-center text-9xl text-white -pt-20 font-extrabold text-opacity-20 -z-10">
                    Blogs
                </div>
                <p className="text-xl text-white text-center mt-20">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>

                <div className="blog-img-container block px-10 lg:flex justify-around">
                    <div className="blog-content-1 w-[300px] h-fit py-10 ">
                        <Image src="/img7.jpg" alt="Blog" width={400} height={400} className="W-[300px] h-[350px] my-5" />
                        <span className="text-yellow-400 text-lg mx-3 cursor-not-allowed">11-Oct-2023</span>
                        <span className="text-yellow-400 text-lg mx-3 cursor-not-allowed">Admin</span>
                        <span className="text-green-400 text-lg mx-3 cursor-not-allowed">Active</span>
                        <p className="text-xl text-white text-center font-bold py-3 cursor-pointer">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        <p className="text-gray-400 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Necessitatibus praesentium repellendus dolore atque assumenda facere ab optio ratione ad sapiente!
                            Eius fugit possimus officia libero nobis! Nostrum non iste minima architecto necessitatibus nihil.
                        </p>
                    </div>

                    <div className="blog-content-1 w-[300px] h-fit py-10 ">
                        <Image src="/img8.jpg" alt="Blog" width={400} height={400} className="W-[300px] h-[350px] my-5" />
                        <span className="text-yellow-400 text-lg mx-3 cursor-not-allowed">11-Oct-2023</span>
                        <span className="text-yellow-400 text-lg mx-3 cursor-not-allowed">Admin</span>
                        <span className="text-green-400 text-lg mx-3 cursor-not-allowed">Active</span>
                        <p className="text-xl text-white text-center font-bold py-3 cursor-pointer">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        <p className="text-gray-400 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Necessitatibus praesentium repellendus dolore atque assumenda facere ab optio ratione ad sapiente!
                            Eius fugit possimus officia libero nobis! Nostrum non iste minima architecto necessitatibus nihil.
                        </p>
                    </div>

                    <div className="blog-content-1 w-[300px] h-fit py-10 ">
                        <Image src="/img9.jpg" alt="Blog" width={400} height={400} className="W-[300px] h-[350px] my-5" />
                        <span className="text-yellow-400 text-lg mx-3 cursor-not-allowed">11-Oct-2023</span>
                        <span className="text-yellow-400 text-lg mx-3 cursor-not-allowed">Admin</span>
                        <span className="text-green-400 text-lg mx-3 cursor-not-allowed">Active</span>
                        <p className="text-xl text-white text-center font-bold py-3 cursor-pointer">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        <p className="text-gray-400 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Necessitatibus praesentium repellendus dolore atque assumenda facere ab optio ratione ad sapiente!
                            Eius fugit possimus officia libero nobis! Nostrum non iste minima architecto necessitatibus nihil.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default BlogSection;