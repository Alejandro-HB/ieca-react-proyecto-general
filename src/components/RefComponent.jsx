import { useRef, useEffect } from "react";

const RefComponent = () => {
  const iRef = useRef();

  const focus = () => {
    console.log(iRef);
    iRef.current.focus();
  };

  const clear = () => {
    iRef.current.value = "";
  };

  const print = () => {
    alert(iRef.current.value);
  };

  return (
    <div className="bg-gray-200 flex-1 w-full">
      <div className="flex gap-4">
        <input type="text" id="input-test" ref={iRef} />
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={focus}>Focus</button>
        <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded" onClick={clear}>Limpiar</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={print}>Imprimir</button>
      </div>
    </div>
  );
};

export default RefComponent;
