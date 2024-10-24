import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {

  function hanleClick(){
    alert('button hello')
  }
  const addToFive=(num) =>{
    alert(num+5);
  }
  return (
    <>
      <h1> React Core Concept </h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={hanleClick}>Click Me</button>
      <button onClick={() => addToFive(5)}>Four</button>
    </>
  );
}

export default App;
