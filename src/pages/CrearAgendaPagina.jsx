import { useState } from "react";
import { BarraDeNavegacion } from "../components/BarraDeNavegacion";
import { useNavigate } from "react-router-dom";

export function CrearAgendaPagina() {

  let [valorDelInput, actualizarValorDelInput] = useState("");
  let navigate = useNavigate();

  function capturarEventoOnChange(evento){
    actualizarValorDelInput(evento.target.value);
  }

  function capturarEventoOnClick(){
    let servicioUrl = "https://playground.4geeks.com/contact/agendas/" + valorDelInput;
    fetch(servicioUrl , { method: "POST" })
      .then((response) => {
        return response.json();
      })
      .then((responseTransformed) => {
        alert("Agenda creada correctamente");
        navigate("/listar-agendas");
      });
  }

  return (
    <div>
      <BarraDeNavegacion />
      <h1 className="text-center p-2">CrearAgendaPagina</h1>
      <div className="d-flex justify-content-center">
      <form style={{width: "200px"}}>
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
        <button type="button" className="btn btn-primary" onClick={capturarEventoOnClick}>
          Crear agenda
        </button>
      </form>
      </div>
    </div>
  );
}
