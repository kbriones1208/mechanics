import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Header } from "./Components/Header";
import { Aside } from "./Components/Aside";
import { Content } from "./Components/Content";
import { Footer } from "./Components/Footer";
import Tarea from "./pages/Tarea";

export default function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
        <Aside/> 
      
              <div>
                <Routes>
                  <Route path="/tarea" element={<Tarea/>}/>
                </Routes>                
              </div>
              
            
    </div>
    
  )
}
