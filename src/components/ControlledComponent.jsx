import { useState } from "react";

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const print = () => {
    alert(inputValue);
  };

  const clear = () => {
    setInputValue("");
  };

  const validate = () => {
    if (inputValue.length > 10) {
      setError("El valor debe tener menos de 10 caracteres");
    } else {
      alert("El valor es correcto: " + inputValue);
      setError("");
    }
  };

  return (
    <div className="bg-gray-200 flex-1 w-full">
      <div className="flex gap-4">
        <input className="block text-gray-700 text-sm font-bold mb-2" type="text" value={inputValue} onChange={handleInputChange} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={print}>Imprimir</button>
        <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded" onClick={clear}>Limpiar</button>
        <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded" onClick={validate}>Validar</button>
      </div>
      {!!error && <span className="text-red-500 text-sm">{error}</span>}
      <div className="flex gap-4">El valor del input es: {inputValue}</div>
    </div>
  );
};

export default ControlledComponent;
