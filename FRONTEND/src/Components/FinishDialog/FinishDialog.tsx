import { FunctionComponent, useEffect, useState } from "react";
import Confetti from "react-confetti";

import { PiHandsClappingThin } from "react-icons/pi";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";

interface FinishDialogProps {
  finish?: boolean;
}

const FinishDialog: FunctionComponent<FinishDialogProps> = ({ finish }) => {
  const [show, setShow] = useState<boolean | null>();
  const [score, setScore] = useState<number>(0);
  const [userWrongs, setUserWrongs] = useState<number>(0);
  const [userClassification, setUserClassification] = useState<string>("");
  const [nextGame, setNextGame] = useState<any>();

  //Resgata valores como pontos e erros do usuario e define a situacao final do usuario
  useEffect(() => {
    const scoreString = localStorage.getItem("UserDailyPoints");
    const points = scoreString && JSON.parse(scoreString);
    setScore(points);

    const wrongsString = localStorage.getItem("UserWrongGuesses");
    const wrongs = wrongsString && JSON.parse(wrongsString);
    setUserWrongs(wrongs);

    if (userWrongs > 0 && userWrongs <= 5) {
      setUserClassification("incrivel");
    } else if (userWrongs > 5 && userWrongs <= 10) {
      setUserClassification("muito bem");
    } else if (userWrongs > 10 && userWrongs <= 20) {
      setUserClassification("bem");
    } else if (userWrongs > 20 && userWrongs <= 30) {
      setUserClassification("legal");
    } else if (userWrongs > 30) {
      setUserClassification("mais ou menos");
    } else {
      setUserClassification("perfeito");
    }
  }, [userWrongs]);

  //Efeito que gera o cronometro
  useEffect(() => {
    function stopwatch() {
      const date = new Date();
      const next = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1,
        0,
        0,
        0,
        0
      );

      const now = new Date().getTime();
      const distance = next.getTime() - now;

      // Cálculo das horas, minutos e segundos
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Atualizar o estado com o tempo restante no formato "hh:mm:ss"
      setNextGame(`${hours}:${minutes}:${seconds}`);
    }

    // Chamar a função imediatamente para a primeira renderização
    stopwatch();

    // Configurar o intervalo para chamar a função a cada segundo
    const intervalId = setInterval(stopwatch, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  //Efeito que ativa o modal
  useEffect(() => {
    setShow(finish);
  }, [finish]);

  return (
    <>
      {show && (
        <AlertDialog open={show}>
          <AlertDialogContent className="">
            <div className="relative flex justify-center items-center w-full">
              <div className="absolute w-[150px] h-[150px] rounded-full shadow-md bg-[#F9A41E] flex justify-center items-center mb-16">
                <PiHandsClappingThin size={65} color="white" />
              </div>
            </div>
            <div className=" h-2/3 rounded-bl-std rounded-br-std ">
              <AlertDialogHeader className=" flex justify-center items-center mt-8">
                <Confetti width={500} recycle={false} />
                <AlertDialogTitle className="font-bold text-4xl">
                  Parabéns!
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Você completou o jogo de hoje!
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="w-[75%] mx-auto space-y-2">
                {userClassification === "perfeito" ? (
                  <p className="font-bold text-center mb-8">
                    Você foi {userClassification} com {userWrongs}{" "}
                    <span className="font-bold text-red-500">erros</span>!
                  </p>
                ) : (
                  <p className="font-bold text-center mb-8">
                    Você foi {userClassification} com apenas {userWrongs}{" "}
                    <span className="font-bold text-red-500">erros</span>!
                  </p>
                )}
                <span className="flex gap-4 items-center">
                  <h1 className="font-bold text-xl ">
                    Pontuação: <span className="text-emerald-500">{score}</span>
                  </h1>
                </span>
                <span className="flex gap-4 items-center">
                  <h1 className="font-bold text-xl ">
                    Próximo jogo: {nextGame}{" "}
                  </h1>
                </span>
              </div>
              <AlertDialogFooter className="mt-20">
                <div className="w-1/2 mx-auto flex justify-between ">
                  <Button variant={"secondary"}>Compartilhar</Button>
                  <AlertDialogAction onClick={() => setShow(false)}>
                    Fechar
                  </AlertDialogAction>
                </div>
              </AlertDialogFooter>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default FinishDialog;
