import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import AddTask from "./Components/AddTask/AddTask";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/addtask" element={<AddTask/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
