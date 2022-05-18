import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AddTask from "./Components/AddTask/AddTask";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import Header from "./Components/Header/Header";
import PrivateAuth from "./Components/PrivateAuth/PrivateAuth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/addtask"
          element={
            <PrivateAuth>
              <AddTask />
            </PrivateAuth>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
