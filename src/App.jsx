import { useState } from "react";
import "./App.css";
import Consumidor1 from "./Consumidor1";
import Consumidor2 from "./Consumidor2";
import Consumidor3 from "./nesting/1/2/3/Consumidor3";
import Componente_contexto from "./CardContext";

function App() {
  return (
    <Componente_contexto>
      <p>PRODUCTOS</p>
      <Consumidor1 titulo="NIVEL 1" />
      <Consumidor2 titulo="NIVEL 1" />
      <Consumidor3 titulo="SUPER ENRUTADO" />
    </Componente_contexto>
  );
}

export default App;
