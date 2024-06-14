import { FunctionComponent, useEffect, useState } from "react";

import { Trophy } from "lucide-react";

import Podio from "../../assets/podio.png";
import Podio2 from "../../assets/Podio2.png";

interface PodiumProps {
  props: any[];
}

const Podium: FunctionComponent<PodiumProps> = ({ props }) => {
  const [users, setUsers] = useState<any[]>([{}]);
  useEffect(() => {
    if (props.length > 2) {
      props.map((user) => {
        setUsers([...users, user]);
      });
    }
  }, [props]);

  return (
    <>
      <div className="w-[440px] h-3/4 flex justify-between pt-4 mx-auto">
        <div className="w-1/3 h-full flex flex-col items-center justify-end">
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-500 ">
            <Trophy />
          </div>
          <div className="w-24 h-24 rounded-full border"></div>
          <img src={Podio2} className="w-full" />
          <div className="w-full h-2/3 bg-gradient-to-t from-zinc-400 to-zinc-200 flex flex-col  items-center justify-center mb-2">
            <h1 className="text-roxoLogo-std font-black text-9xl">2</h1>
            <p>Fezin</p>
          </div>
        </div>
        <div className="w-3/5 h-full flex flex-col items-center justify-end  ">
          <div className="w-8 h-10 rounded-full flex justify-center items-center bg-yellow-300  ">
            <Trophy />
          </div>
          <div className="w-20 h-28 rounded-full border "></div>
          <img src={Podio} className="w-full" />
          <div className="w-full h-full bg-gradient-to-t from-zinc-400 to-zinc-200 shadow-lg flex flex-col  items-center justify-center">
            <h1 className="text-roxoLogo-std font-black text-9xl">1</h1>
            <p>Fezin</p>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col items-center  justify-end">
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-yellow-700 ">
            <Trophy />
          </div>
          <div className="w-24 h-24 rounded-full border"></div>
          <img src={Podio} />
          <div className="w-full h-1/2 bg-gradient-to-t from-zinc-400 to-zinc-200 flex flex-col  items-center justify-center mb-2">
            <h1 className="text-roxoLogo-std font-black text-7xl">3</h1>
            <p>Fezin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Podium;
