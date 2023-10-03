import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const addColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre &&
      nuevoColaborador.correo &&
      nuevoColaborador.edad &&
      nuevoColaborador.cargo &&
      nuevoColaborador.telefono
    ) {
      const nuevoID = (colaboradores.length + 1).toString();
      nuevoColaborador.id = nuevoID;

      setColaboradores([...colaboradores, nuevoColaborador]);

      setAlertMessage("Colaborador agregado correctamente 😊");
      setAlertType("success");
    } else {
      setAlertMessage("Los campos están incompletos 😖");
      setAlertType("danger");
    }
    setTimeout(() => {
      setAlertMessage("");
      setAlertType("");
    }, 3000);
  };

  const filteredColaboradores = colaboradores.filter((colaborador) => {
    const values = Object.values(colaborador);
    return values.some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="p-5">
      <h1 className="">Lista de colaboradores</h1>
      <div className="d-flex flex-column flex-md-row gap-2">
        <div className="col-md-8 order-2 order-md-1">
          <div>
            <Buscador onSearch={handleSearch} />
            <Listado colaboradores={filteredColaboradores} />
          </div>
        </div>
        <div className="col-md-4 order-1 order-md-2">
          <Formulario onAddColaborador={addColaborador} />
          {alertMessage && <Alert message={alertMessage} type={alertType} />}
        </div>
      </div>
    </div>
  );
}

export default App;
