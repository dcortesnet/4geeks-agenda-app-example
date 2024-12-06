import { Link } from "react-router-dom";

export function BarraDeNavegacion() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to={"/listar-agendas"}
                style={{ color: "white", padding: "5px" }}
              >
                Listado de agendas
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                to={"/crear-agenda"}
                style={{ color: "white", padding: "5px" }}
              >
                Crear agenda
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                to={"/buscar-agenda"}
                style={{ color: "white", padding: "5px" }}
              >
                buscar agenda
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                to={"/eliminar-agenda"}
                style={{ color: "white", padding: "5px" }}
              >
                eliminar agenda
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                to={"/crear-contacto"}
                style={{ color: "white", padding: "5px" }}
              >
                crear contacto
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
