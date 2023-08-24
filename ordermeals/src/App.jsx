import "./Assets/App.scss";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="app-container">
      <Nav></Nav>
      <Hero></Hero>
    </div>
  );
}

export default App;
