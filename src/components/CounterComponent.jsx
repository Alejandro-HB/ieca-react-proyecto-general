import useCounter from "../hooks/useCounter";

const CounterComponent = () => {
  const { counter, increment, decrement } = useCounter(10);

  return (
    <div className="flex-1 w-full flex flex-col gap-4 px-4">
      <h1 className="text-5xl text-purple-900">{counter}</h1>
      <div className="flex gap-4">
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={increment}>Incrementar</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>Decrementar</button>
      </div>
    </div>
  );
};

export default CounterComponent;
