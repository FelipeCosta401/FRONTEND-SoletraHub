import { FunctionComponent, useEffect } from "react";

import Form from "../../Components/FormLogin/Form";
import Logo from "../../assets/Logosimples.png";
import Btns from "../../assets/btns.png";

interface LoginProps {
  login?: boolean;
}

const Login: FunctionComponent<LoginProps> = ({ login }) => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <div
        className="bg-roxoLogo-dark flex"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div className="bg-white w-500 h-full rounded-r-std  pb-12">
          <div className="w-3/4 h-full m-auto">
            <div className="h-1/4 w-48 mx-auto mb-4 flex flex-col items-center justify-center">
              <img src={Logo} className="w-32" />
            </div>
            <div className="h-2/3">
              {login ? (
                <h1 className="font-bold text-2xl text-tDark text-center mx-auto mb-4 w-3/5">
                  Seja bem vindo de volta!
                </h1>
              ) : (
                <h1 className="font-bold text-2xl text-tDark text-center mx-auto mb-4 w-3/5">
                  Seja bem vindo!
                </h1>
              )}

              <div className="w-4/5 mx-auto h-3/4">
                <Form isLogin={login} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-500 mx-auto flex flex-col justify-center items-center gap-12 ">
          <h1 className="text-white font-bold text-7xl">Soletra HUB</h1>
          <img src={Btns} />
        </div>
      </div>
    </>
  );
};

export default Login;
