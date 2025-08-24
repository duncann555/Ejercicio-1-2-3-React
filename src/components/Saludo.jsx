import { useState } from "react";

function Saludo(props) {
  const [msj, setMsj] = useState("");

  const mostrarMensaje = () => {
    setMsj("(from changed state)");
  };

  return (
    <div>
      <h1>
        Hello World, {props.nombre} {msj}
      </h1>
      <button onClick={mostrarMensaje}>Click Aqui</button>

    </div>
  );
}

export default Saludo;
