import {Route, Routes} from "react-router-dom";
import Header from "./pages/Header";
import './App.css'

function App() {

  return (
    <Routes> 
      <Route index element={<Header/>} />
    </Routes>
    
  );
}

export default App
