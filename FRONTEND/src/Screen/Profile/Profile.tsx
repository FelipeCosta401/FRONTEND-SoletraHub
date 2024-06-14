import { useContext, useEffect, FunctionComponent } from "react";
import UserContext from "../../Context/UserContext";

import { UserAuth } from "../../Interfaces/User/Auth";

import { Gamepad2, Star } from "lucide-react";
import { Input } from "../../Components/ui/input";

import Avatar from "../../Components/UserDefaultAvatar/Avatar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";

interface ProfileProps {
  screenSize: number;
}

const Profile: FunctionComponent<ProfileProps> = ({ screenSize }) => {
  const { info } = useContext<UserAuth>(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      window.location.replace("/login");
    } else {
    }
  }, []);

  return (
    <>
      <div className="min-[591px]:flex min-[591px]:ml-40 ">
        {screenSize <= 590 ? (
          <nav>
            <Navbar />
          </nav>
        ) : (
          <aside className="h-screen w-32 shadow-md fixed left-0">
            <Sidebar />
          </aside>
        )}
        <div className="w-full px-2 mx-auto ">
          <div className="w-full h-full mx-auto ">
            <div className="w-full mt-4 bg-roxoLogo-std  rounded-std rounded-l-full flex items-center">
              <div className="w-full pr-8 h-full mx-start flex items-center gap-4">
                <div className="p-4 ">
                  <Avatar name={info.name} />
                </div>
                <div className="w-full min-[900px]:flex justify-between  ">
                  <div className="">
                    <h1 className="font-bold text-4xl text-white">
                      {info.nickname}
                    </h1>
                    <p className="font-bold text-2xl text-white">{info.name}</p>
                  </div>
                  <div className=" justify-between gap-10 ">
                    <span className="flex justify-between items-center gap-4 z">
                      <h1 className="font-bold text-lg text-white">
                        Pontos:{" "}
                        <span className=" font-normal text-sm">1850</span>
                      </h1>
                      <Star size={35} color="white" />
                    </span>
                    <span className="flex justify-between items-center gap-4">
                      <h1 className="font-bold text-lg text-white">
                        Jogos: <span className=" font-normal text-sm">64</span>
                      </h1>
                      <Gamepad2 size={35} color="white" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 min-[900px]:flex items-center justify-between gap-24 ">
              <div className="w-full px-4 pb-10 h-full mx-auto ">
                <h1 className="text-tDark text-2xl font-bold">Editar perfil</h1>
                <div className="mt-8 flex flex-col gap-5">
                  <span>
                    <label
                      htmlFor="username"
                      className="text-medium text-base text-tDark"
                    >
                      Username
                    </label>
                    <Input
                      type="text"
                      value={info.nickname}
                      name="nickname"
                      id="username"
                      className="rounded-std-2 pl-3 text-base text-tDark border-secundary"
                    />
                  </span>
                  <span>
                    <label
                      htmlFor="username"
                      className="text-medium text-base text-tDark"
                    >
                      Nome
                    </label>
                    <Input
                      type="text"
                      value={info.name}
                      name="name"
                      id="name"
                      className="rounded-std border-2 pl-3 text-base text-tDark border-secundary"
                    />
                  </span>
                  <span>
                    <label
                      htmlFor="email"
                      className="text-medium text-base text-tDark"
                    >
                      Email
                    </label>
                    <Input
                      type="text"
                      value={info.email}
                      id="email"
                      className="rounded-std border-2 pl-3 text-base text-tDark border-secundary"
                    />
                  </span>
                  <div className="w-36 h-10 bg-roxoLogo-std rounded-std flex items-center justify-center hover:cursor-pointer hover:bg-roxoLogo-dark">
                    <h1 className="text-white font-bold text-lg">Salvar</h1>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 pb-10 h-full mx-auto">
                <h1 className="text-tDark text-2xl font-bold">Editar perfil</h1>
                <div className="mt-8 flex flex-col gap-5">
                  <span>
                    <label
                      htmlFor="currentpass"
                      className="text-medium text-base text-tDark"
                    >
                      Senha atual
                    </label>
                    <Input
                      type="text"
                      id="currentpass"
                      className="rounded-std border-2 pl-3 text-base text-tDark border-secundary"
                    />
                  </span>
                  <span>
                    <label
                      htmlFor="newpass"
                      className="text-medium text-base text-tDark"
                    >
                      Nova senha
                    </label>
                    <Input
                      type="text"
                      id="newpass"
                      className="rounded-std border-2 pl-3 text-base text-tDark border-secundary"
                    />
                  </span>
                  <span>
                    <label
                      htmlFor="confpass"
                      className="text-medium text-base text-tDark"
                    >
                      Confirmar nova senha
                    </label>
                    <Input
                      type="text"
                      id="confpass"
                      className="rounded-std border-2 pl-3 text-base text-tDark border-secundary"
                    />
                  </span>
                  <div className="w-36 h-10 bg-roxoLogo-std rounded-std flex items-center justify-center hover:cursor-pointer hover:bg-roxoLogo-dark">
                    <h1 className="text-white font-bold text-lg">Salvar</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
