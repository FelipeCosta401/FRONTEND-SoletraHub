import { useState, useEffect, FunctionComponent } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Keys from "../../Components/KeysArea/Keys";
import Table from "../../Components/AllWordsTable/Table";
import Navbar from "@/Components/Navbar/Navbar";

interface HomeProps {
  screenSize: number;
}

const Home: FunctionComponent<HomeProps> = ({ screenSize }) => {
  const [token, setToken] = useState<string | null>("");
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<String>("");

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setToken(token);
  }, [localStorage.getItem("userToken")]);

  const updateLocalStorage = (key: string, value: string) => {
    setKey(key);
    setValue(value);
  };

  return (
    <>
      {token !== null ? (
        <div className="max-w-screen flex max-[590px]:flex-col justify-between gap-4">
          {screenSize <= 590 ? (
            <nav>
              <Navbar home/>
            </nav>
          ) : (
            <aside className="h-screen w-32 shadow-md fixed left-0">
              <Sidebar home />
            </aside>
          )}

          <main className="w-full h-screen flex justify-center items-center max-[1200px]:h-full  min-[591px]:ml-36">
            <div className="w-[95%] flex justify-center items-center gap-4 max-[1200px]:flex-col max-[1200px]:mt-28">
              <div className="w-1/2 flex justify-center items-center">
                <Keys
                  onUpdate={(key: any, value: any) =>
                    updateLocalStorage(key, value)
                  }
                />
              </div>
              <div className="w-500 max-[650px]:w-full flex justify-center items-center">
                <Table tableUpdate={{ [key]: value }} />
              </div>
            </div>
          </main>
        </div>
      ) : (
        window.location.replace("/login")
      )}
    </>
  );
};

export default Home;
