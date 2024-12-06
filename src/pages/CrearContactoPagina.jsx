import { useState } from "react";
import { BarraDeNavegacion } from "../components/BarraDeNavegacion";

export function CrearContactoPagina() {
  let [nombreDeAgenda, actualizarNombreAgenda] = useState("");
  let [nombreDeContacto, actualizarNombreDeContacto] = useState("");
  let [celularDeContacto, actualizarCelularDeContacto] = useState("");
  let [emailDeContacto, actualizarEmailDeContacto] = useState("");
  let [direccionDeContacto, actualizardireccionDeContacto] = useState("");

  function crearContactoServicio() {
    // console.log(nombreDeAgenda, nombreDeContacto, celularDeContacto, emailDeContacto,direccionDeContacto );

    let url =
      "https://playground.4geeks.com/contact/agendas/" +
      nombreDeAgenda +
      "/contacts";

    let body = JSON.stringify({
      name: nombreDeContacto,
      phone: celularDeContacto,
      email: emailDeContacto,
      address: direccionDeContacto,
    });

    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseConverted) => {
        
        console.log(responseConverted);
      });
  }

  return (
    <div>
      <BarraDeNavegacion />
      <h1 className="text-center p-2">CrearContactoPagina</h1>
      <div className="d-flex justify-content-center">
        <form style={{ width: "400px" }}>
          <div className="mb-3">
            <label for="agendaNombre" className="form-label">
              Ingresar nombre de agenda
            </label>
            <input
              type="text"
              className="form-control"
              id="agendaNombre"
              onChange={(e) => actualizarNombreAgenda(e.target.value)}
            />

            <label for="contactoNombre" className="form-label">
              Ingresar nombre del contacto
            </label>
            <input
              type="text"
              className="form-control"
              id="contactoNombre"
              onChange={(e) => actualizarNombreDeContacto(e.target.value)}
            />

            <label for="contactoCelular" className="form-label">
              Ingresar celular del contacto
            </label>
            <input
              type="text"
              className="form-control"
              id="contactoCelular"
              onChange={(e) => actualizarCelularDeContacto(e.target.value)}
            />

            <label for="contactoEmail" className="form-label">
              Ingresar email del contacto
            </label>
            <input
              type="text"
              className="form-control"
              id="contactoEmail"
              onChange={(e) => actualizarEmailDeContacto(e.target.value)}
            />

            <label for="direccionContacto" className="form-label">
              Ingresar dirección del contacto
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => actualizardireccionDeContacto(e.target.value)}
            ></textarea>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={crearContactoServicio}
          >
            Crear contacto
          </button>
        </form>
      </div>
    </div>
  );
}
