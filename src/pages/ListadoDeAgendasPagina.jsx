import { useEffect, useState } from "react";
import { BarraDeNavegacion } from "../components/BarraDeNavegacion";
import Loading from '../images/Loading.gif';

export function ListadoDeAgendasPagina() {

  let [agendas, actualizarAgendas] = useState([]);
  let [mostrarCargando, actualizarMostrarCargando] = useState(false);

  useEffect(()=> {
    actualizarMostrarCargando(true);
    fetch("https://playground.4geeks.com/contact/agendas")
        .then((response)=> {
            return response.json()
        })
        .then((transformed)=> {
            actualizarAgendas(transformed.agendas)
            actualizarMostrarCargando(false);
        })

  }, []);

  return (
    <div>
      <BarraDeNavegacion />
      <h1 className="text-center p-2">ListadoDeAgendasPagina</h1>
      <div className="d-flex justify-content-center">
      {
        (mostrarCargando) ? <img src={Loading} /> : <ul className="list-group " style={{width: "200px"}}>
        {
            agendas.map((agenda)=> {
                return <li className="list-group-item">{agenda.slug}</li>
            })
        }
      </ul>
      }
      </div>
      
    </div>
  );
}
