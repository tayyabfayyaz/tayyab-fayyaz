import { FaMapLocationDot, FaPhone,  } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";



function ConatctIcons(){
    return(
        <main>
            <div className="icons-container w-full h-fit lg:py-10 px-28 lg:px-20 lg:flex justify-between bg-zinc-900">
                <div className="divisions w-[250px] h-fit py-10">
                    <FaMapLocationDot className="w-[150px] h-[150px] text-yellow-400 text-5xl bg-black p-5 rounded-full block mx-auto" />
                    <h2 className="text-xl text-white text-center font-bold my-5">ADDRESS</h2>
                    <p className="text-xl text-white text-center">House# 17, Sector 35/D</p>
                    <p className="text-xl text-white text-center">Korangi# 5, Karachi</p>
                </div>

                <div className="divisions w-[250px] h-fit py-10">
                    <FaPhone className="w-[150px] h-[150px] text-yellow-400 text-5xl bg-black p-5 rounded-full block mx-auto" />
                    <h2 className="text-xl text-white text-center font-bold my-5">PHONE</h2>
                    <p className="text-xl text-white text-center">+92 3182997727</p>
                    <p className="text-xl text-white text-center">+92 3162055581</p>
                </div>

                <div className="divisions w-[250px] h-fit py-10">
                    <FaTelegramPlane className="w-[150px] h-[150px] text-yellow-400 text-5xl bg-black p-5 rounded-full block mx-auto" />
                    <h2 className="text-xl text-white text-center font-bold my-5">Email</h2>
                    <p className="text-xl text-white text-center">fayyaztayyab931@gmail.com</p>
                </div>

                <div className="divisions w-[250px] h-fit py-10">
                    <TbWorldCode className="w-[150px] h-[150px] text-yellow-400 text-5xl bg-black p-5 rounded-full block mx-auto" />
                    <h2 className="text-xl text-white text-center font-bold my-5">WEBSITE</h2>
                    <p className="text-xl text-white text-center">tayyabfayyaz.pk.com</p>
                </div>
            </div>
        </main>
    );
};

export default ConatctIcons;