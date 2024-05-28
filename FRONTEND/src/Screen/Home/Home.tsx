

import Sidebar from "../../Components/Sidebar/Sidebar";
import Keys from "../../Components/KeysArea/Keys"


const Home = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="w-32 shadow-md">
          <Sidebar />
        </div>
        <div className="w-full">
          <header>
          </header>
          <main className="w-2/5 pt-12">
            <Keys />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
