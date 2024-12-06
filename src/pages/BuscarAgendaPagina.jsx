import { useState } from "react";
import { BarraDeNavegacion } from "../components/BarraDeNavegacion";

export function BuscarAgendaPagina() {
  let [valorDelInput, actualizarValorDelInput] = useState("");
  let [respuesta, actualizarRespuesta] = useState("");

  function capturarEventoOnChange(evento) {
    actualizarValorDelInput(evento.target.value);
  }

  function capturarEventoOnClick() {
    let servicioUrl =
      "https://playground.4geeks.com/contact/agendas/" + valorDelInput;

    fetch(servicioUrl).then((response) => {
      if (response.status === 200) {
        actualizarRespuesta("La agenda si existe 😀");
      } else {
        actualizarRespuesta("La agenda que intentas buscar no existe 🤬");
      }
    });
  }

  return (
    <div>
      <BarraDeNavegacion />
      <h1 className="text-center p-2">BuscarAgendaPagina</h1>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form style={{ width: "200px" }}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Ingresar nombre de agenda
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={capturarEventoOnChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={capturarEventoOnClick}
          >
            Buscar agenda
          </button>
        </form>
        <div>{respuesta}</div>
      </div>
    </div>
  );
}
