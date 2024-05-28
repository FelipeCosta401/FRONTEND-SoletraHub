import { Gamepad2, HomeIcon, Star, CircleUser, LogOut } from "lucide-react";

import Logo from "../../assets/Logosimples.png";

const Sidebar = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center w-1/2">
          <img src={Logo} />
          <h1 className="font-bold text-2xl text-center text-tDark">
            Soletra Hub
          </h1>
        </div>
        <div className=" w-16 h-80 mx-auto flex flex-col gap-10">
          <div className="w-full h-16 bg-primary-std rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer hover:bg-primary-dark">
            <Gamepad2 size={45} color="white" />
          </div>
          <div className="w-full h-16 bg-secundary rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer">
            <Star size={45} className="text-tDark" />
          </div>
          <div className="w-full h-16 bg-secundary rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer">
            <HomeIcon size={45} className="text-tDark" />
          </div>
        </div>
        <div className="w-24 h-24 mb-4 flex flex-col items-center ">
          <div className="w-2/3 h-2/3 rounded-full">
            <CircleUser size={60} className="text-tDark" />
          </div>
          <div className="w-full h-1/3 bg-primary-std rounded-std flex items-center justify-center gap-1 hover:cursor-pointer hover:shadow-xl hover:bg-primary-dark">
            <LogOut color="#fff" size={20} />
            <p className="text-sm font-bold text-white">LOGOUT</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
