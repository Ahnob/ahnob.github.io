function App() {
  const createNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(<button key={i}>{i}</button>);
    }
    return numbers;
  };
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="screen">
          <span>0</span>
        </div>
        <div className="operators">
          <button>*</button>
          <button>/</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>

          <div className="numbers">
            {/* {createNumbers()} */}
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
