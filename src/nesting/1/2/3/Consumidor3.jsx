import { UseMascara } from "../../../../CardContext";
import "../../../../App.css";

const Consumidor3 = (props) => {
  const { llamadito, llamadito2, productos } = UseMascara();
  return (
    <div className="rojo">
      <p>{props.titulo}</p>
      {productos.map((item) => (
        <p key={item.id}>{item.nombre}</p>
      ))}
      <button onClick={llamadito}>CLICK</button>
    </div>
  );
};

export default Consumidor3;
