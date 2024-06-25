import { useState, useEffect, FunctionComponent, FormEvent } from "react";
import { LettersInterface } from "../../Interfaces/Game/Letters";
import useFetch from "@/Hooks/useFetch";
import axiosInstance from "@/Services/AxiosConfig";
import { Button } from "@/Components/ui/button";
import { Toaster } from "@/Components/ui/sonner";
import { toast } from "sonner";

interface KeysProps {
  onUpdate: (key: string, value: string | number) => void;
  onWrongsUpdate: (wrong: number) => void;
}

const Keys: FunctionComponent<KeysProps> = ({ onUpdate, onWrongsUpdate }) => {
  const correctGuesses = localStorage.getItem("UserCorrectGuesses");
  const wrongGuesses = localStorage.getItem("UserWrongGuesses");
  const dailyPoints = localStorage.getItem("UserDailyPoints");
  const [finalGuess, setFinalGuess] = useState<string>("");
  const [words, setWords] = useState<LettersInterface>();
  const [points, setPoints] = useState<number>(
    dailyPoints ? JSON.parse(dailyPoints) : 0
  );
  const [wrongs, setWrongs] = useState<number>(
    wrongGuesses ? JSON.parse(wrongGuesses) : 0
  );
  const [corrects, setCorrects] = useState<any[]>(
    correctGuesses ? JSON.parse(correctGuesses) : []
  );
  const { words: dailyWords, results } = useFetch();

  useEffect(() => {
    localStorage.setItem("UserDailyPoints", JSON.stringify(points));
  }, [points]);

  useEffect(() => {
    localStorage.setItem("UserWrongGuesses", JSON.stringify(wrongs));
    onWrongsUpdate(wrongs);
  }, [wrongs]);

  useEffect(() => {
    const formatWord = (letter: string) => {
      return letter.toUpperCase();
    };

    if (dailyWords) {
      setWords({
        mw: formatWord(dailyWords.mw),
        w2: formatWord(dailyWords.w2),
        w3: formatWord(dailyWords.w3),
        w4: formatWord(dailyWords.w4),
        w5: formatWord(dailyWords.w5),
        w6: formatWord(dailyWords.w6),
        w7: formatWord(dailyWords.w7),
      });
    }
  }, [dailyWords]);

  useEffect(() => {
    setFinalGuess(finalGuess.toUpperCase());
  }, [finalGuess]);

  const handleChange = (value: string) => {
    setFinalGuess((prevState) => prevState + value);
  };

  const handleDelete = () => {
    setFinalGuess((prevState) => prevState.slice(0, -1));
  };

  useEffect(() => {
    localStorage.setItem("UserCorrectGuesses", JSON.stringify(corrects));
    onUpdate("UserCorrectGuesses", JSON.stringify(corrects));
  }, [corrects]);

  const handleSubmitGuess = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (finalGuess.length < 4) {
      toast.error("A palavra tem que conter ao menos 4 letras!");
    } else {
      axiosInstance
        .post("/home/answer", {
          answer: finalGuess,
        })
        .then((res) => {
          if (res.data[0]) {
            if (corrects.length > 0) {
              let allAnswers: number[] = [];
              corrects.map((answer) => {
                allAnswers = [
                  ...allAnswers,
                  ...Object.keys(answer).map((key) => Number(key)),
                ];
              });
              if (allAnswers.includes(res.data[1])) {
                toast.error("Essa palavra ja foi adivinhada!");
              } else {
                setCorrects([...corrects, { [res.data[1]]: res.data[2] }]);
                results.map((result) => {
                  if (res.data[1] === result[1]) {
                    setPoints((prevPoints) => prevPoints + result[0] * 2);
                  }
                });
                toast.success("Palavra correta!");
              }
            } else {
              setCorrects([...corrects, { [res.data[1]]: res.data[2] }]);
              results.map((result) => {
                if (res.data[1] === result[1]) {
                  setPoints((prevPoints) => prevPoints + result[0] * 2);
                }
              });
              toast.success("Palavra correta!");
            }
          } else {
            toast.error("Essa palavra nao esta na lista!");
            setPoints((prevPoints) => prevPoints - 1);
            setWrongs((prevWrongs) => prevWrongs + 1);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setFinalGuess("");
        });
    }
  };

  return (
    <>
      <form
        className="w-[440px] flex flex-col gap-4"
        onSubmit={(e) => handleSubmitGuess(e)}
      >
        <div className="w-full h-11 flex justify-center ">
          <input
            type="text"
            className="w-full text-center text-4xl font-bold outline-none text-black"
            placeholder="SEU PALPITE..."
            value={finalGuess}
            onChange={(e) => setFinalGuess(e.target.value)}
            autoFocus
          />
        </div>
        <div className="h-4/5 w-96 mx-auto">
          <div className=" h-1/3 flex justify-between">
            <div className=" w-1/2 flex justify-end pr-2">
              <Button
                type="button"
                onClick={() => words && handleChange(words.w2)}
                className="w-24 h-24 rounded-full bg-grayDefault flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w2}
              </Button>
            </div>
            <div className=" w-1/2 pl-2">
              <Button
                type="button"
                onClick={() => words && handleChange(words.w3)}
                className=" w-24 h-24 rounded-full bg-grayDefault flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w3}
              </Button>
            </div>
          </div>
          <div className=" h-1/3 flex justify-center gap-4">
            <div className=" w-1/4 flex justify-center">
              <Button
                type="button"
                onClick={() => words && handleChange(words.w4)}
                className=" w-24 h-24 rounded-full bg-grayDefault flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w4}
              </Button>
            </div>
            <div className=" w-1/4 flex justify-center">
              <Button
                type="button"
                onClick={() => words && handleChange(words.mw)}
                className=" w-24 h-24 rounded-full bg-roxoLogo-std flex justify-center items-center font-semibold text-3xl text-white hover:bg-roxoLogo-dark hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.mw}
              </Button>
            </div>
            <div className=" w-1/4 flex justify-center">
              <Button
                type="button"
                onClick={() => words && handleChange(words.w5)}
                className=" w-24 h-24 rounded-full bg-grayDefault flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w5}
              </Button>
            </div>
          </div>
          <div className=" h-1/3 flex justify-between">
            <div className=" w-1/2 flex justify-end pr-2">
              <Button
                type="button"
                onClick={() => words && handleChange(words.w6)}
                className=" w-24 h-24 rounded-full bg-grayDefault flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w6}
              </Button>
            </div>
            <div className=" w-1/2 pl-2">
              <Button
                type="button"
                onClick={() => words && handleChange(words.w7)}
                className=" w-24 h-24 rounded-full bg-grayDefault flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w7}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full h-12 mx-auto flex justify-between">
          <Button
            type="button"
            onClick={() => handleDelete()}
            variant={"outline"}
            className="w-2/5 h-full text-tDark font-semibold text-xl rounded-std"
          >
            Apagar
          </Button>
          <Button
            type="submit"
            className="h-full w-2/5 bg-roxoLogo-std flex items-center justify-center text-white font-semibold text-xl rounded-std hover:cursor-pointer hover:bg-roxoLogo-dark"
          >
            Confirmar
          </Button>
        </div>
        <Toaster richColors />
      </form>
    </>
  );
};

export default Keys;
