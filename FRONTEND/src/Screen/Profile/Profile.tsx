import { useContext } from "react";
import UserContext from "../../Context/UserContext";

import { UserAuth } from "../../Interfaces/User/Auth";

import { Gamepad2, Star } from "lucide-react";
import { Input } from "../../Components/ui/input";

import Avatar from "../../Components/UserDefaultAvatar/Avatar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Profile = () => {
  const { info } = useContext<UserAuth>(UserContext);
  return (
    <>
      <div className="flex">
        <div className="h-screen w-32 shadow-md mr-20 fixed left-0">
          <Sidebar />
        </div>
        <div className="w-1000 h-650 ml-56 m-auto">
          <div className="w-full h-full mx-auto ">
            <div className="w-full mt-32 bg-primary-std rounded-l-full flex items-center">
              <div className="w-full h-full flex items-center justify-between pl-4 pr-4 rounded-l-full">
                <div className="p-4">
                  <Avatar name={info.name} />
                </div>
                <div className="">
                  <h1 className="font-bold text-4xl text-white">
                    {info.nickname}
                  </h1>
                  <p className="font-bold text-2xl text-white">{info.name}</p>
                </div>
                <div className="">
                  <span className="flex justify-between items-center gap-4">
                    <h1 className="font-bold text-lg text-white">
                      Pontos: 1850
                    </h1>
                    <Star size={35} color="white" />
                  </span>
                  <span className="flex justify-between items-center gap-4">
                    <h1 className="font-bold text-lg text-white">Jogos: 64</h1>
                    <Gamepad2 size={35} color="white" />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-2/3 mt-20 flex justify-between gap-24 ">
              <div className="w-1/2 h-full ">
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
                      className="rounded-std border-2 pl-3 text-base text-tDark border-secundary"
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
                  <div className="w-36 h-10 bg-primary-std rounded-std flex items-center justify-center hover:cursor-pointer hover:bg-primary-dark">
                    <h1 className="text-white font-bold text-lg">Salvar</h1>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full ">
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
                  <div className="w-36 h-10 bg-primary-std rounded-std flex items-center justify-center hover:cursor-pointer hover:bg-primary-dark">
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
