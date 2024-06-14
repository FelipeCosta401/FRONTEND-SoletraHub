import { useEffect, useState, FunctionComponent } from "react";
import useFetch from "@/Hooks/useFetch";

interface TableProps {
  tableUpdate: {
    key: string;
    value: string;
  };
}

const Table: FunctionComponent<TableProps> = ({ tableUpdate }) => {
  const { results } = useFetch();
  const [alreadyGuessed, setAlreadyGuessed] = useState<number[] | undefined>();
  const [corrects, setCorrects] = useState<number[]>([]);

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
  }, [alreadyGuessed]);

  useEffect(() => {
    const handleStorageChange = (event: { key: string }) => {
      if (event.key === "UserCorrectGuesses") {
        console.log("teste");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="w-500 max-[650px]:w-full flex flex-col gap-5">
        <span className="flex justify-between px-4">
          <h1 className="text-tDark font-bold text-lg">
            Palavras já encontradas
          </h1>
          <div className="w-16 h-8 rounded-std bg-roxoLogo-std flex items-center justify-center">
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
