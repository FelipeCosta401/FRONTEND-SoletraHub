import { useContext, FunctionComponent } from "react";
import UserContext from "@/Context/UserContext";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/dialog";

import { Gamepad2, HomeIcon, Star, LogOut } from "lucide-react";

import Logo from "../../assets/Logosimples.png";
import Avatar from "../UserDefaultAvatar/Avatar";

interface SideBarprops {
  home?: boolean;
  ranking?: boolean;
  profile?: boolean;
}

const Sidebar: FunctionComponent<SideBarprops> = ({
  home
}) => {
  const { info } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="h-full w-32 flex flex-col items-center justify-between fixed left-0">
        <div className="flex flex-col items-center w-1/2 hover:cursor-pointer">
          <img src={Logo} />
          <h1 className="font-bold text-2xl text-center text-tDark">
            Soletra Hub
          </h1>
        </div>
        <div className=" w-16 h-80 mx-auto flex flex-col gap-10">
          <div
            className={`w-full h-16 ${
              home
                ? "bg-primary-std text-white hover:bg-primary-dark"
                : "bg-secundary text-tDark hover:bg-zinc-400"
            } rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer `}
          >
            <Gamepad2 size={45} onClick={() => window.location.replace("/")} />
          </div>
          <div className="w-full h-16 bg-secundary rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer">
            <Star size={45} className="text-tDark" />
          </div>
          <div className="w-full h-16 bg-secundary rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer">
            <HomeIcon size={45} className="text-tDark" />
          </div>
        </div>
        <div className="w-24 h-24 mb-4 flex flex-col gap-2 items-center ">
          <div
            onClick={() => {
              window.location.replace("/profile");
            }}
            className="w-2/3 h-2/3 rounded-full flex items-center overflow-hidden hover:cursor-pointer  "
          >
            <Avatar name={info.name} />
          </div>
          <div className="w-full h-1/3 bg-primary-std rounded-std flex items-center justify-center gap-1 hover:cursor-pointer hover:shadow-xl hover:bg-primary-dark">
            <AlertDialog>
              <AlertDialogTrigger className="flex items-center justify-center gap-1">
                <LogOut color="#fff" size={20} />
                <p className="text-sm font-bold text-white">LOGOUT</p>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white rounded-std">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja sair?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Você perderá o progresso caso não tenha salvo ainda!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleLogout()}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
