import { useState, useEffect, FunctionComponent } from "react";
import { LettersInterface } from "../../Interfaces/Game/Letters";
import useFetch from "@/Hooks/useFetch";
import axiosInstance from "@/Services/AxiosConfig";
import { Toaster } from "../../Components/ui/sonner";
import { toast } from "sonner";

interface KeysProps {
  onUpdate: any;
}

const Keys: FunctionComponent<KeysProps> = ({ onUpdate }) => {
  const [finalGuess, setFinalGuess] = useState<string>("");
  const [words, setWords] = useState<LettersInterface>();
  const storedUserGuesses = localStorage.getItem("UserCorrectGuesses");
  const [corrects, setCorrects] = useState<any[]>(
    storedUserGuesses ? JSON.parse(storedUserGuesses) : []
  );
  const { words: dailyWords } = useFetch();

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

  const handleSubmitGuess = () => {
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
              toast.success("Palavra correta!");
            }
          } else {
            setCorrects([...corrects, { [res.data[1]]: res.data[2] }]);
            toast.success("Palavra correta!");
          }
        } else {
          toast.error("Essa palavra nao esta na lista!");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setFinalGuess("");
      });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4 border">
        <div className="w-full h-11 flex justify-center ">
          <input
            type="text"
            className="w-full text-center text-4xl font-bold outline-none text-black"
            placeholder="SEU PALPITE..."
            value={finalGuess}
            onChange={(e) => setFinalGuess(e.target.value)}
            autoFocus
          />

          <Toaster richColors />
        </div>
        <div className="h-4/5 w-96 mx-auto">
          <div className=" h-1/3 flex justify-between">
            <div className=" w-1/2 flex justify-end pr-2">
              <div
                onClick={() => handleChange(words.w2)}
                className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w2}
              </div>
            </div>
            <div className=" w-1/2 pl-2">
              <div
                onClick={() => handleChange(words.w3)}
                className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w3}
              </div>
            </div>
          </div>
          <div className=" h-1/3 flex justify-center gap-4">
            <div className=" w-1/4 flex justify-center">
              <div
                onClick={() => handleChange(words.w4)}
                className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w4}
              </div>
            </div>
            <div className=" w-1/4 flex justify-center">
              <div
                onClick={() => handleChange(words.mw)}
                className=" w-24 h-24 rounded-full bg-primary-std flex justify-center items-center font-semibold text-3xl text-white hover:bg-primary-dark hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.mw}
              </div>
            </div>
            <div className=" w-1/4 flex justify-center">
              <div
                onClick={() => handleChange(words.w5)}
                className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w5}
              </div>
            </div>
          </div>
          <div className=" h-1/3 flex justify-between">
            <div className=" w-1/2 flex justify-end pr-2">
              <div
                onClick={() => handleChange(words.w6)}
                className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w6}
              </div>
            </div>
            <div className=" w-1/2 pl-2">
              <div
                onClick={() => handleChange(words.w7)}
                className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl"
              >
                {words?.w7}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-12 mx-auto flex justify-between">
          <div
            onClick={() => handleDelete()}
            className="h-full w-2/5 border  border-secundary rounded-std flex items-center justify-center font-semibold text-tDark text-xl hover:cursor-pointer hover:bg-zinc-200"
          >
            Apagar
          </div>
          <div
            onClick={() => handleSubmitGuess()}
            className="h-full w-2/5 bg-primary-std rounded-std flex items-center justify-center text-white font-semibold text-xl hover:cursor-pointer hover:bg-primary-dark"
          >
            Confirmar
          </div>
        </div>
      </div>
    </>
  );
};

export default Keys;
