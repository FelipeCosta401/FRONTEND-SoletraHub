import { FunctionComponent, useContext } from "react";
import UserContext from "@/Context/UserContext";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/Components/ui/sheet";

import { Button } from "../ui/button";

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

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

import { Gamepad2, HomeIcon, Star, LogOut, Menu } from "lucide-react";

import Logo from "../../assets/Logosimples.png";
import UserDefaultAvatar from "@/Components/UserDefaultAvatar/Avatar";

interface NavbarProps {
  home?: boolean;
  ranking?: boolean;
}

const Navbar: FunctionComponent<NavbarProps> = ({ home, ranking }) => {
  const { info } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <>
      <div className="w-full h-[85px] flex justify-between items-center gap-2 ">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="Imagem do logo" />
        </div>
        <span className="w-full text-center">
          <h1 className="font-bold text-5xl text-tDark">SOLETRA</h1>
        </span>
        <div className="flex justify-center items-center">
          <Sheet>
            <SheetTrigger>
              <Menu size={55} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader
                className="my-10 hover:cursor-pointer"
                onClick={() => window.location.replace("/profile")}
              >
                <SheetTitle className="flex gap-2 items-center">
                  <Avatar>
                    {info.avatar && (
                      <AvatarImage src={info.avatar} alt="Imagem do usuário" />
                    )}
                    <AvatarFallback>
                      <UserDefaultAvatar name={info.name} mini />
                    </AvatarFallback>
                  </Avatar>
                  {info.name}
                </SheetTitle>
              </SheetHeader>
              <div className="w-full h-80 mx-auto flex flex-col gap-10">
                <div
                  className="group w-full flex items-center gap-6 border border-secondary rounded-std hover:cursor-pointer"
                  onClick={() => window.location.replace("/")}
                >
                  <div
                    className={`w-16 h-16 ${
                      home
                        ? "bg-roxoLogo-std text-white group-hover:bg-roxoLogo-dark "
                        : "bg-grayDefault text-tDark group-hover:bg-zinc-400"
                    } rounded-tl-sm rounded-bl-sm flex items-center justify-center shadow-2xl`}
                  >
                    <Gamepad2 size={45} />
                  </div>
                  <h3 className="font-bold text-xl text-tDark">Jogar</h3>
                </div>
                <div
                  className="group w-full flex items-center gap-6 border border-secondary rounded-std hover:cursor-pointer"
                  onClick={() => {
                    window.location.replace("/ranking");
                  }}
                >
                  <div
                    className={`w-16 h-16 ${
                      ranking
                        ? "bg-roxoLogo-std text-white group-hover:bg-roxoLogo-dark"
                        : "bg-grayDefault text-tDark group-hover:bg-zinc-400"
                    } rounded-tl-sm rounded-bl-sm flex items-center justify-center shadow-2xl group-hover:cursor-pointer`}
                  >
                    <Star size={45} />
                  </div>
                  <h3 className="font-bold text-xl text-tDark">
                    Classificação
                  </h3>
                </div>
                <div className="group w-full flex items-center gap-6 border border-secondary rounded-std hover:cursor-pointer">
                  <div className="w-16 h-16 bg-grayDefault rounded-tl-sm rounded-bl-sm flex items-center justify-center shadow-2xl hover:cursor-pointer group-hover:bg-zinc-400">
                    <HomeIcon size={45} className="text-tDark" />
                  </div>
                  <h3 className="font-bold text-xl text-tDark">Home</h3>
                </div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger className="w-full">
                  <SheetFooter className="flex items-center h-[50px]">
                    <div className="w-full h-full bg-roxoLogo-std rounded-std flex items-center justify-center gap-1 hover:cursor-pointer hover:shadow-xl hover:bg-roxoLogo-dark">
                      <LogOut color="#fff" size={20} />
                      <p className="text-sm font-bold text-white">LOGOUT</p>
                    </div>
                  </SheetFooter>
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
