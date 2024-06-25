import { ChangeEvent, FunctionComponent, useState } from "react";
import axiosInstance from "../../Services/AxiosConfig";

import { Input } from "../ui/input";

import { UserInterface } from "../../Interfaces/User/User";

interface FormProps {
  isLogin?: boolean;
}

const Form: FunctionComponent<FormProps> = ({ isLogin }) => {
  const [confpass, setConfpass] = useState<string>("");

  const [userCredentials, setUserCredentials] = useState<UserInterface>({
    name: "",
    email: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(`${name}: ${value}`)
    setUserCredentials((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    if (
      !userCredentials.name ||
      !userCredentials.email ||
      !userCredentials.nickname ||
      !userCredentials.password ||
      !confpass
    ) {
      alert("Preencha todos os campos poha");
    } else if (userCredentials.password !== confpass) {
      alert("As senhas não condizem");
    } else {
      axiosInstance
        .post("/user", {
          name: userCredentials.name,
          email: userCredentials.email,
          nickname: userCredentials.nickname,
          password: userCredentials.password,
        })
        .then(() => {
          alert("Registrado com sucesso!");
          handleLogin();
        })
        .catch((error) => {
          alert(error.response.data.message);
          console.log(error);
        });
    }
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
        localStorage.setItem("userInfo", JSON.stringify(res.data.user));
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <span className="px-2 ">
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
          <span className="px-2 ">
            <label htmlFor="nome" className="text-tDark font-medium">
              Nome
            </label>
            <Input
              type="text"
              value={userCredentials.name || ""}
              name="name"
              onChange={(e) => handleChange(e)}
              id="nome"
              className="rounded-std border-2 border-secundary"
            />
          </span>
        )}
        {!isLogin && (
          <span className="px-2 ">
            <label htmlFor="password" className="text-tDark font-medium">
              Nome de usuário
            </label>
            <Input
              id="nickname"
              name="nickname"
              value={userCredentials.nickname || ""}
              onChange={(e) => handleChange(e)}
              type="text"
              className="rounded-std border-2 border-secundary"
            />
          </span>
        )}
        <span className="px-2 ">
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
          <span className="px-2 ">
            <label htmlFor="confpassword" className="text-tDark font-medium">
              Confirmar senha
            </label>
            <Input
              value={confpass}
              onChange={(e) => setConfpass(e.target.value)}
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
            className="border h-10 rounded-std bg-roxoLogo-std text-white font-bold text-base hover:cursor-pointer hover:bg-roxoLogo-dark"
          />
        ) : (
          <input
            type="submit"
            onClick={() => handleRegister()}
            value="Registrar"
            className="border h-10 rounded-std bg-roxoLogo-std text-white font-bold text-base hover:cursor-pointer hover:bg-roxoLogo-dark"
          />
        )}
        {isLogin ? (
          <a href="/register">
            <p className="font-bold text-roxoLogo-std">Não possui uma conta?</p>
          </a>
        ) : (
          <a href="/login">
            <p className="font-bold text-roxoLogo-std">Já possui uma conta?</p>
          </a>
        )}
      </div>
    </>
  );
};

export default Form;
