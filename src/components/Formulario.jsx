import { useState } from "react";

function Formulario({ onAddColaborador }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoColaborador = {
      nombre,
      correo: email,
      edad,
      cargo,
      telefono,
    };

    onAddColaborador(nuevoColaborador);

    setNombre("");
    setEmail("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
}

export default Formulario;
