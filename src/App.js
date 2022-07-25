// 스타일 시트를 불러옵니다.
import "./App.css";
import Dashbaord from "./Component/Dashboard";

function App() {
  const state = { quantity: 1 };

  return (
    <>
      <header className="header">What's in My Fridge</header>
      <Dashbaord state={state}/>
    </>
  );
}

export default App;
