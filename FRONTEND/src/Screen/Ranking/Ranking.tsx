import { useState, useEffect, FunctionComponent } from "react";
import axiosInstance from "@/Services/AxiosConfig";

import Sidebar from "@/Components/Sidebar/Sidebar";
import Podium from "@/Components/Podium/Podium";
import RankingTable from "@/Components/RankingTable/Table";
import Navbar from "@/Components/Navbar/Navbar";

interface RankingProps {
  screenSize: number;
}

const Ranking: FunctionComponent<RankingProps> = ({ screenSize }) => {
  const [users, setUsers] = useState([
    {
      name: "",
      games: 0,
      avatar: "",
      points: 0,
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      window.location.replace("/login");
    } else {
    }
  }, []);

  useEffect(() => {
    axiosInstance.get("ranking").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <div className="w-full h-full min-[591px]:flex justify-between gap-4">
        {screenSize <= 590 ? (
          <nav>
            <Navbar ranking />
          </nav>
        ) : (
          <aside className="h-screen w-32 shadow-md fixed left-0">
            <Sidebar ranking />
          </aside>
        )}
        <div className="w-full flex flex-col gap-10 pb-10 min-[591px]:ml-36 px-2 ">
          <Podium props={users} />
          <RankingTable props={users} />
        </div>
      </div>
    </>
  );
};

export default Ranking;
