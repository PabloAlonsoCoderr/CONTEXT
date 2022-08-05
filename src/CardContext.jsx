import { useState, createContext, useContext } from "react";
import { stock } from "./Productos";

export const Mascara = createContext([]);

export const UseMascara = () => useContext(Mascara);

const Componente_contexto = ({ children }) => {
  const [productos, setProductos] = useState(stock);

  function llamadito() {
    alert("llamadito");
  }

  function llamadito2() {
    alert("llamadito2");
  }

  return (
    <Mascara.Provider value={{ llamadito, llamadito2, productos }}>
      {children}
    </Mascara.Provider>
  );
};

// {
//   console.log(children);
// }
export default Componente_contexto;
