import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./Form";
import Home from "./Home";
function App() {
  return (
    <>
      <Home/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/form" element={<Form />}/>
          {/* <Route path="/data" element={<Data />}/> */}
        </Routes>
      
    </>
  );
}

export default App;
