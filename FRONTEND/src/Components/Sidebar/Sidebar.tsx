import { useContext, FunctionComponent } from "react";
import UserContext from "@/Context/UserContext";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

import { Gamepad2, HomeIcon, Star, LogOut } from "lucide-react";

import Logo from "../../assets/Logo.png";
import UserDefaultAvatar from "../UserDefaultAvatar/Avatar";

interface SideBarprops {
  home?: boolean;
  ranking?: boolean;
  profile?: boolean;
  onComplete?: () => void;
}

const Sidebar: FunctionComponent<SideBarprops> = ({
  home,
  ranking,
  onComplete,
}) => {
  const { info } = useContext(UserContext);
  const handleLogout = () => {
    onComplete && onComplete();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="h-full w-32 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center w-full hover:cursor-pointer">
          <img src={Logo} />
        </div>
        <div className=" w-16 h-80 mx-auto flex flex-col gap-10">
          <div
            onClick={() => window.location.replace("/")}
            className={`w-full h-16 ${
              home
                ? "bg-roxoLogo-std text-white hover:bg-roxoLogo-dark"
                : "bg-grayDefault text-tDark hover:bg-zinc-400"
            } rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer `}
          >
            <Gamepad2 size={45} />
          </div>
          {ranking ? (
            <div
              onClick={() => {
                window.location.replace("/ranking");
              }}
              className="w-full h-16 bg-roxoLogo-std rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer"
            >
              <Star size={45} className="text-white" />
            </div>
          ) : (
            <div
              onClick={() => {
                window.location.replace("/ranking");
              }}
              className="w-full h-16 bg-grayDefault rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer hover:bg-zinc-400"
            >
              <Star size={45} className="text-tDark" />
            </div>
          )}
          <div className="w-full h-16 bg-grayDefault rounded-sm flex items-center justify-center shadow-2xl hover:cursor-pointer">
            <HomeIcon size={45} className="text-tDark" />
          </div>
        </div>
        <div className="w-24 h-[120px] mb-4 flex flex-col gap-2 items-center ">
          <Avatar
            className="w-[70px] h-[70px] hover:cursor-pointer "
            onClick={() => window.location.replace("/profile")}
          >
            <AvatarFallback>
              <UserDefaultAvatar name={info.nickname} />
            </AvatarFallback>
          </Avatar>
          <div className="w-full h-1/3">
            <AlertDialog>
              <AlertDialogTrigger className="w-full">
                <Button className="w-full h-full bg-roxoLogo-std hover:bg-roxoLogo-dark hover:cursor-pointer rounded-std">
                  <div className="flex justify-between items-center">
                    <LogOut />
                    <p>LOGOUT</p>
                  </div>
                </Button>
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
                  <Button
                    variant={"destructive"}
                    onClick={() => handleLogout()}
                  >
                    Continue
                  </Button>
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
