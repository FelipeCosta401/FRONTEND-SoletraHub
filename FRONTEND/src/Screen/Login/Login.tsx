import { FunctionComponent, useEffect } from "react";

import { ScrollArea } from "@/Components/ui/scroll-area";

import Form from "../../Components/FormLogin/Form";
import Logo from "../../assets/Logosimples.png";
import Btns from "../../assets/btns.png";

interface LoginProps {
  login?: boolean;
  screenSize: number;
}

const Login: FunctionComponent<LoginProps> = ({ login }) => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <div className="bg-roxoLogo-dark h-screen flex flex-col max-[900px]:h-full min-[901px]:flex-row">
        <div className="bg-gray-50 w-500 h-full rounded-r-std pb-12 max-[900px]:w-full max-[900px]:order-2  max-[900px]:rounded-tl-std max-[900px]:rounded-tr-std max-[900px]:rounded-bl-none max-[900px]:rounded-br-none">
          <div className="w-full h-full m-auto">
            <div className="h-1/4 w-48 mx-auto mb-4 flex flex-col items-center justify-center">
              <img src={Logo} className="w-32" />
            </div>
            <div className="h-2/3 max-[500px]:w-full">
              {login ? (
                <h1 className="font-bold text-2xl text-tDark text-center mx-auto mb-4 w-3/5">
                  Seja bem vindo de volta!
                </h1>
              ) : (
                <h1 className="font-bold text-2xl text-tDark text-center mx-auto mb-4 w-3/5">
                  Seja bem vindo!
                </h1>
              )}

              <ScrollArea className="w-4/5 p-4 mx-auto h-full rounded-std shadow-xl bg-white ">
                <Form isLogin={login} />
              </ScrollArea>
            </div>
          </div>
        </div>
        <div className="w-500 max-[900px]:w-full  mx-auto flex flex-col justify-center items-center gap-12 p-4 order-1 ">
          <h1 className="text-white font-bold text-7xl text-center">
            Soletra HUB
          </h1>
          <img src={Btns} />
        </div>
      </div>
    </>
  );
};

export default Login;
