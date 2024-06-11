import { useState, useEffect } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Keys from "../../Components/KeysArea/Keys";
import Table from "../../Components/AllWordsTable/Table";

const Home = () => {
  const [hour, setHour] = useState<number>(new Date().getHours());
  const [token, setToken] = useState<string | null>("");
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<String>("");

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setToken(token);
  }, [localStorage.getItem("userToken")]);

  useEffect(() => {
    console.log(hour);
  }, [hour]);

  const updateLocalStorage = (key: string, value: string) => {
    setKey(key);
    setValue(value);
  };

  return (
    <>
      {token !== null ? (
        <div className="w-screen flex">
          <div className="h-screen w-32 shadow-md fixed left-0 ">
            <Sidebar home />
          </div>
          <div className="w-full ml-32">
            <main className="flex justify-between pt-12">
              <div className="w-1/2">
                <Keys
                  onUpdate={(key: any, value: any) =>
                    updateLocalStorage(key, value)
                  }
                />
              </div>
              <div className="w-1/2">
                <Table tableUpdate={{ [key]: value }} />
              </div>
            </main>
          </div>
        </div>
      ) : (
        window.location.replace("/login")
      )}
    </>
  );
};

export default Home;
