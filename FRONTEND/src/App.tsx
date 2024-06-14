import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "./Context/UserContext";

import { UserAuth } from "./Interfaces/User/Auth";

import Home from "./Screen/Home/Home";
import Login from "./Screen/Login/Login";
import Profile from "./Screen/Profile/Profile";
import Ranking from "./Screen/Ranking/Ranking";

function App() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [user, setUser] = useState<UserAuth>({
    logged: false,
    token: null,
    info: {
      name: "",
      nickname: "",
      email: "",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString !== null) {
      var userInfo = JSON.parse(userInfoString);
    }
    if (token !== null) {
      setUser({
        logged: true,
        token,
        info: userInfo,
      });
    }
  }, []);

  useEffect(() => {
    function handleScreenSize() {
      const width = window.innerWidth;
      setScreenWidth(width);
    }

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home screenSize={screenWidth} />} />
          <Route path="/login" element={<Login login />} />
          <Route path="/register" element={<Login login={false} />} />
          <Route
            path="/profile"
            element={<Profile screenSize={screenWidth} />}
          />
          <Route
            path="/ranking"
            element={<Ranking screenSize={screenWidth} />}
          />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
