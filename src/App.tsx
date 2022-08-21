import { useState, useCallback, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const add: () => void = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const varl: number = useMemo(() => {
    return count ** 2;
  }, [count]);
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          add();
        }}
      >
        +1
      </button>
      <h2>{varl}</h2>
    </div>
  );
}

export default App;
