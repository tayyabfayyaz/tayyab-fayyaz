function ContactForm(){
    return(
        <main>
            <form action="" method="get" className="w-full px-5 lg:px-0 h-fit py-10 bg-zinc-900">
                <h2 className="text-center text-5xl font-extrabold text-white pt-10 -mb-7">Contact Us</h2>
                <div className="heading w-full h-20 text-center text-7xl lg:text-9xl text-white -pt-20 mb-10 font-extrabold text-opacity-20 -z-10">
                    Contact
                </div>

                <label htmlFor="name" className="text-2xl text-white font-bold lg:ml-[380px]">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" className="block mx-auto mt-3 mb-8 w-full md:w-full lg:w-[600px] h-[40px] px-5 rounded-md text-white bg-transparent border-b-2 border-b-yellow-400 shadow-md shadow-yellow-400" />

                <label htmlFor="name" className="text-2xl text-white font-bold lg:ml-[380px]">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="block mx-auto mt-3 mb-8 w-full md:w-full lg:w-[600px] h-[40px] px-5 rounded-md text-white bg-transparent border-b-2 border-b-yellow-400 shadow-md shadow-yellow-400" />

                <label htmlFor="name" className="text-2xl text-white font-bold lg:ml-[380px]">Phone No.</label>
                <input type="text" name="number" id="number" placeholder="Phone No." className="block mx-auto mt-3 mb-8 w-full md:w-full lg:w-[600px] h-[40px] px-5 rounded-md text-white bg-transparent border-b-2 border-b-yellow-400 shadow-md shadow-yellow-400" />

                <label htmlFor="message" className="text-2xl text-white font-bold lg:ml-[380px]">Message</label>
                <textarea name="message" id="message" placeholder="Write Message" className="block mx-auto mt-3 mb-8 w-full md:w-full lg:w-[600px] h-[100px] px-5 rounded-md text-white bg-transparent border-b-2 border-b-yellow-400 shadow-md shadow-yellow-400"></textarea>

                <button type="submit" className="h-10 w-40 bg-yellow-400 text-zinc-900 font-semibold cursor-pointer mt-16 rounded-md border-2 border-zinc-900 block mx-auto">Send</button>
            </form>
        </main>
    );
};

export default ContactForm;