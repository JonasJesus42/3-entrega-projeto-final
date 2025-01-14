import React from "react";
import {Routes, Route} from "react-router-dom"
import Contatos from "./page/contatos/Contatos";
import Home from "./page/home/Home";
import Locais from "./page/locais/Locais";
import Menu from "./page/components/menu/menu";
import './index.css'

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contatos" element={<Contatos />}/>
        <Route path="/locais" element={<Locais />}/>
        <Route path="*" element={<h1>Pagina não Encontrada</h1>}/>

      </Routes>
    </>
  );
}

export default App;
