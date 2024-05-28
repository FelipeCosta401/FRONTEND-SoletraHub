import { Routes, Route } from "react-router-dom";

import Home from "./Screen/Home/Home";
import Login from "./Screen/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login />} />
        <Route path="/register" element={<Login login={false} />} />
      </Routes>
    </>
  );
}

export default App;
