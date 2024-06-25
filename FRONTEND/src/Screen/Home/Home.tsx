import { useState, useEffect, FunctionComponent } from "react";
import axiosInstance from "@/Services/AxiosConfig";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Keys from "../../Components/KeysArea/Keys";
import Table from "../../Components/AllWordsTable/Table";
import Navbar from "@/Components/Navbar/Navbar";
import FinishDialog from "@/Components/FinishDialog/FinishDialog";

interface HomeProps {
  screenSize: number;
}

const Home: FunctionComponent<HomeProps> = ({ screenSize }) => {
  const [token, setToken] = useState<string | null>("");
  const [wrongs, setWrongs] = useState<number>(0);
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<String | number>("");
  const [finish, setFinish] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setToken(token);
  }, [localStorage.getItem("userToken")]);

  const updateLocalStorage = (key: string, value: string | number) => {
    setKey(key);
    setValue(value);
  };

  const updateWrongs = (wrong: number) => {
    setWrongs(wrong);
  };

  const handleComplete = () => {
    setFinish(true);
    const pointsString = localStorage.getItem("UserDailyPoints");
    const score = pointsString && JSON.parse(pointsString);
    console.log(score);
    axiosInstance.post(`/home/score/${score}`).then((res) => console.log(res));
  };

  return (
    <>
      {token !== null ? (
        <div className="max-w-screen flex max-[590px]:flex-col justify-between gap-4">
          {screenSize <= 590 ? (
            <nav>
              <Navbar home onComplete={() => handleComplete()} />
            </nav>
          ) : (
            <aside className="h-screen w-32 shadow-md fixed left-0">
              <Sidebar home onComplete={() => handleComplete()} />
            </aside>
          )}

          <main className="w-full h-screen flex justify-center items-center max-[1200px]:h-full  min-[591px]:ml-36">
            <div className="w-[95%] flex justify-center items-center gap-4 max-[1200px]:flex-col max-[1200px]:mt-28">
              <div className="w-1/2 flex justify-center items-center">
                <Keys
                  onUpdate={(key: string, value: string | number) =>
                    updateLocalStorage(key, value)
                  }
                  onWrongsUpdate={(wrong: number) => updateWrongs(wrong)}
                />
              </div>
              <div className="w-500 max-[650px]:w-full flex justify-center items-center ">
                <Table
                  tableUpdate={{ [key]: value }}
                  onComplete={() => handleComplete()}
                />
              </div>
            </div>
          </main>
          <FinishDialog finish={finish} />
        </div>
      ) : (
        window.location.replace("/login")
      )}
    </>
  );
};

export default Home;
