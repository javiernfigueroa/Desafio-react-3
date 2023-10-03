import { useState } from "react";

function Buscador({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setSearchText(value);
    onSearch(value);
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar trabajador"
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Buscador;
