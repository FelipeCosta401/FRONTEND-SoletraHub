import { useEffect, useState, FunctionComponent } from "react";
import useFetch from "@/Hooks/useFetch";
import { Progress } from "../ui/progress";

interface TableProps {
  tableUpdate: {
    key: string;
    value: string;
  };
  onComplete: () => void;
}

const Table: FunctionComponent<TableProps> = ({
  tableUpdate,
  onComplete,
}) => {
  const { results } = useFetch();
  const [alreadyGuessed, setAlreadyGuessed] = useState<number[]>([]);
  const [corrects, setCorrects] = useState<number[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (results) {
      results.map((result) => {
        setTotal((prevTotal) => prevTotal + result[0] * 2);
      });
    }
  }, [results]);

  useEffect(() => {
    const storedUserCorrectGuesses = localStorage.getItem("UserCorrectGuesses");
    if (storedUserCorrectGuesses) {
      setAlreadyGuessed(JSON.parse(storedUserCorrectGuesses));
    }
  }, [tableUpdate]);

  useEffect(() => {
    if (alreadyGuessed) {
      setCorrects((prevCorrects) => [
        ...prevCorrects,
        ...alreadyGuessed.map((answer) => Number(Object.keys(answer)[0])),
      ]);
    }

    //Verifica se o usuario finalizou o jogo
    if (alreadyGuessed.length > 0 && results.length > 0) {
      if (alreadyGuessed.length === results.length) {
        onComplete();
      }
    }

    //Calcula os pontos do usuario
    if (results) {
      const pointsString: any = localStorage.getItem("UserDailyPoints");
      setPoints(JSON.parse(pointsString));

      if (total > 0) {
        setProgress((points / total) * 100);
      }
    }
  }, [alreadyGuessed, results, total, points]);

  return (
    <>
      <div className="w-500 max-[650px]:w-full flex flex-col gap-5">
        <span className="w-full">
          <h4 className="font-bold text-lg ml-4">Pontuação:</h4>
          <span className="w-[90%] ml-auto flex gap-4 items-center">
            <h4>{points}</h4>
            <Progress value={progress} className="w-full" />
          </span>
        </span>
        <span className="flex justify-between px-4 ">
          <h1 className="text-tDark font-bold text-lg">
            Palavras já encontradas
          </h1>
          <div className="w-16 h-8 rounded-std bg-roxoLogo-std flex items-center justify-center ">
            <p className="text-white font-bold text-lg ">
              {alreadyGuessed?.length}/{results.length}
            </p>
          </div>
        </span>
        <div className="h-96 w-full pb-24 overflow-scroll flex flex-col gap-5">
          <div className="w-full grid grid-cols-2 gap-5 max-[650px]:grid-cols-1">
            {alreadyGuessed?.map((answer) => (
              <div
                key={Object.keys(answer)[0]}
                className="w-full h-12 pl-3 border-2 border-roxoLogo-std flex items-center justify-start rounded-std "
              >
                <p className="text-roxoLogo-std font-bold text-sm">
                  {Object.values(answer)}
                </p>
              </div>
            ))}
            {results.map(
              (word) =>
                !corrects.includes(word[1]) && (
                  <div
                    key={word[1]}
                    className="border-2 border-grayDefault flex items-center justify-start pl-3 rounded-std h-12"
                  >
                    <p className="text-tLight text-sm">{word[0]} letras</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
