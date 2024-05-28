import { ChangeEvent, FunctionComponent, useState } from "react";
import axiosInstance from "../../Services/AxiosConfig";

import { Input } from "../ui/input";

import { UserInterface } from "../../Interfaces/User/User";

interface FormProps {
  isLogin?: boolean;
}

const Form: FunctionComponent<FormProps> = ({ isLogin }) => {
  const [userCredentials, setUserCredentials] = useState<UserInterface>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(`${name}: ${value}`)
    setUserCredentials((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // console.log(userCredentials);
    axiosInstance
      .post("/login", {
        email: userCredentials.email,
        password: userCredentials.password,
      })
      .then((res) => {
        localStorage.setItem("userToken", res.data.token);
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <span>
          <label htmlFor="email" className="text-tDark font-medium">
            Email
          </label>
          <Input
            type="email"
            value={userCredentials.email || ""}
            name="email"
            onChange={(e) => handleChange(e)}
            id="email"
            className="rounded-std border-2 border-secundary"
          />
        </span>
        {!isLogin && (
          <span>
            <label htmlFor="nome" className="text-tDark font-medium">
              Nome
            </label>
            <Input
              type="text"
              id="nome"
              className="rounded-std border-2 border-secundary"
            />
          </span>
        )}
        <span>
          <label htmlFor="password" className="text-tDark font-medium">
            Senha
          </label>
          <Input
            id="password"
            name="password"
            value={userCredentials.password || ""}
            onChange={(e) => handleChange(e)}
            type="password"
            className="rounded-std border-2 border-secundary"
          />
        </span>
        {!isLogin && (
          <span>
            <label htmlFor="confpassword" className="text-tDark font-medium">
              Confirmar senha
            </label>
            <Input
              id="confpassword"
              type="password"
              className="rounded-std border-2 border-secundary"
            />
          </span>
        )}
        {isLogin ? (
          <input
            type="submit"
            onClick={() => handleLogin()}
            value="Entrar"
            className="border h-10 rounded-std bg-primary-std text-white font-bold text-base hover:cursor-pointer hover:bg-roxoLogo-dark"
          />
        ) : (
          <input
            type="submit"
            onClick={() => handleLogin()}
            value="Registrar"
            className="border h-10 rounded-std bg-primary-std text-white font-bold text-base hover:cursor-pointer hover:bg-roxoLogo-dark"
          />
        )}
        {isLogin ? (
          <a href="/register">
            <p className="font-bold text-primary-std">Não possui uma conta?</p>
          </a>
        ) : (
          <a href="/login">
            <p className="font-bold text-primary-std">Já possui uma conta?</p>
          </a>
        )}
      </div>
    </>
  );
};

export default Form;
