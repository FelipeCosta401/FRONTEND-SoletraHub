import { FunctionComponent, useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

import { Trophy } from "lucide-react";

import Podio from "../../assets/podio.png";
import Podio2 from "../../assets/Podio2.png";
import Podio3 from "../../assets/Podio3.png";

interface PodiumProps {
  props: any[];
}

const Podium: FunctionComponent<PodiumProps> = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleSize() {
      const w = window.innerWidth;
      setWidth(w);
    }
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <>
      {width > 770 ? (
        <div className="w-[770px] max-[970px]:w-full   h-[520px] mx-auto flex">
          <div className="w-[28%] h-full flex flex-col items-center justify-end pb-3 ">
            <span className="w-[40px] h-[40px] rounded-full mb-2 bg-grayDefault flex items-center justify-center">
              <Trophy />
            </span>
            <Avatar className="w-1/2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <img src={Podio2} className="w-full" />
            <div className="h-[210px] w-full bg-gradient-to-t from-zinc-400 to-zinc-200 flex items-center justify-center">
              <span className="text-center">
                <h1 className="font-extrabold text-7xl text-roxoLogo-std">2</h1>
                <h3 className=" font-black text-xl">Fezin</h3>
              </span>
            </div>
          </div>
          <div className="w-[45%] h-full flex flex-col items-center  justify-end">
            <span className="w-[40px] h-[40px] rounded-full mb-2 bg-yellow-400 flex items-center justify-center">
              <Trophy />
            </span>
            <Avatar className="w-1/2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <img src={Podio} className="w-full" />
            <div className="h-[270px] w-full bg-gradient-to-t from-zinc-400 to-zinc-200 flex items-center justify-center shadow-2xl">
              <span className="text-center">
                <h1 className="font-extrabold text-9xl text-roxoLogo-std">1</h1>
                <h3 className=" font-black text-xl">Fezin</h3>
              </span>
            </div>
          </div>
          <div className="w-[28%] h-full flex flex-col items-center  justify-end pb-3 ">
            <span className="w-[40px] h-[40px] rounded-full mb-2 bg-yellow-700 flex items-center justify-center">
              <Trophy />
            </span>
            <Avatar className="w-1/2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <img src={Podio3} className="w-full" />
            <div className="h-[150px] w-full bg-gradient-to-t from-zinc-400 to-zinc-200 flex items-center justify-center">
              <span className="text-center">
                <h1 className="font-extrabold text-5xl text-roxoLogo-std">3</h1>
                <h3 className=" font-black text-xl">Fezin</h3>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[770px] max-[970px]:w-full h-[570px] mx-auto mt-4 space-y-4">
          <div className="w-full h-1/3 flex flex-col items-center justify-end">
            <Avatar className="w-[80px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <img src={Podio} className="w-full" />
            <div className="h-[80px] w-full bg-gradient-to-t from-zinc-400 to-zinc-200 flex items-center justify-center shadow-2xl">
              <span className="w-2/3 flex justify-between items-center">
                <h1 className="font-extrabold text-7xl text-roxoLogo-std">
                  1°
                </h1>
                <h3 className=" font-black text-xl">Fezin</h3>
                <span className="w-[40px] h-[40px] rounded-full mb-2 bg-yellow-400 flex items-center justify-center">
                  <Trophy />
                </span>
              </span>
            </div>
          </div>
          <div className="w-[90%]  h-1/3 flex flex-col items-center justify-end">
            <Avatar className="w-[80px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <img src={Podio} className="w-full" />
            <div className="h-[80px] w-full bg-gradient-to-t from-zinc-400 to-zinc-200 flex items-center justify-center">
              <span className="w-2/3 flex justify-between items-center">
                <h1 className="font-extrabold text-5xl text-roxoLogo-std">
                  2°
                </h1>
                <h3 className=" font-black text-xl">Fezin</h3>
                <span className="w-[40px] h-[40px] rounded-full mb-2 bg-grayDefault flex items-center justify-center">
                  <Trophy />
                </span>
              </span>
            </div>
          </div>
          <div className="w-[80%] h-1/3 flex flex-col items-center  justify-end ">
            <Avatar className="w-[80px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <img src={Podio} className="w-full" />
            <div className="h-[80px] w-full bg-gradient-to-t from-zinc-400 to-zinc-200 flex items-center justify-center">
              <span className="w-2/3 flex justify-between items-center">
                <h1 className="font-extrabold text-5xl text-roxoLogo-std">
                  3°
                </h1>
                <h3 className=" font-black text-xl">Fezin</h3>
                <span className="w-[40px] h-[40px] rounded-full mb-2 bg-yellow-700 flex items-center justify-center">
                  <Trophy />
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Podium;
