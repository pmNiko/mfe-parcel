import reactLogo from "./assets/react.svg";
import CustomButton from "./components/CustomButton";
import TestComponent from "./components/TestComponent";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <TestComponent />

      <CustomButton />
    </>
  );
}

export default App;