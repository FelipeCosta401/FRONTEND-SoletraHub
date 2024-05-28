import { useState } from "react";

const Keys = () => {
  const [finalGuess, setFinalGuess] = useState<string>("");

  const handleChange = (value: string) => {
    setFinalGuess(value);
  };

  return (
    <>
      <div className="h-full w-3/4 ml-28 flex flex-col gap-4">
        <div className="w-full h-11 flex justify-center ">
          <input
            type="text"
            className="w-full text-center text-4xl font-bold text-tLight outline-none"
            placeholder="SEU PALPITE..."
            value={finalGuess}
            onChange={(e) => handleChange(e.target.value)}
            autoFocus
          />
        </div>
        <div className="h-4/5 w-96 mx-auto">
          <div className=" h-1/3 flex justify-between">
            <div className=" w-1/2 flex justify-end pr-2">
              <div className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl">
                A
              </div>
            </div>
            <div className=" w-1/2 pl-2">
              <div className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl">
                H
              </div>
            </div>
          </div>
          <div className=" h-1/3 flex justify-center gap-4">
            <div className=" w-1/4 flex justify-center">
              <div className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl">
                F
              </div>
            </div>
            <div className=" w-1/4 flex justify-center">
              <div className=" w-24 h-24 rounded-full bg-primary-std flex justify-center items-center font-semibold text-3xl text-white hover:bg-primary-dark hover:cursor-pointer shadow-md hover:shadow-xl">
                E
              </div>
            </div>
            <div className=" w-1/4 flex justify-center">
              <div className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl">
                O
              </div>
            </div>
          </div>
          <div className=" h-1/3 flex justify-between">
            <div className=" w-1/2 flex justify-end pr-2">
              <div className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl">
                P
              </div>
            </div>
            <div className=" w-1/2 pl-2">
              <div className=" w-24 h-24 rounded-full bg-secundary flex justify-center items-center font-semibold text-tDark text-3xl hover:bg-zinc-400 hover:cursor-pointer shadow-md hover:shadow-xl">
                L
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-12 mx-auto flex justify-between">
          <div className="h-full w-2/5 border  border-secundary rounded-std flex items-center justify-center font-semibold text-tDark text-xl hover:cursor-pointer hover:bg-zinc-200">
            Apagar
          </div>
          <div className="h-full w-2/5 bg-primary-std rounded-std flex items-center justify-center text-white font-semibold text-xl hover:cursor-pointer hover:bg-primary-dark">
            Confirmar
          </div>
        </div>
      </div>
    </>
  );
};

export default Keys;
