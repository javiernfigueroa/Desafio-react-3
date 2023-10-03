import { useState } from "react";

function Buscador({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearch(text);
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
