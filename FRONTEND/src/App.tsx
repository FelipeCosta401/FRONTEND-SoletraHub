import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "./Context/UserContext";

import { UserAuth } from "./Interfaces/User/Auth";

import Home from "./Screen/Home/Home";
import Login from "./Screen/Login/Login";
import Profile from "./Screen/Profile/Profile";

function App() {
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

  return (
    <>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login login />} />
          <Route path="/register" element={<Login login={false} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
