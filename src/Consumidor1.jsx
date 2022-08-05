import { UseMascara } from "./CardContext";
import "./App.css";

const Consumidor = (props) => {
  const { llamadito, productos } = UseMascara();

  return (
    <div className="verde">
      <p>{props.titulo}</p>
      {productos.map((item) => (
        <p key={item.id}>{item.nombre}</p>
      ))}
      <button onClick={llamadito}>CLICK</button>
    </div>
  );
};

export default Consumidor;
