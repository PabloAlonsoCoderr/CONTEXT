import { UseMascara } from "./CardContext";
import "./App.css";

const Consumidor2 = (props) => {
  const { llamadito, llamadito2, productos } = UseMascara();
  return (
    <div className="azul">
      <p>{props.titulo}</p>
      {productos.map((item) => (
        <p key={item.id}>{item.nombre}</p>
      ))}
      <button onClick={llamadito}>CLICK</button>
    </div>
  );
};

export default Consumidor2;
