import "./Assets/App.scss";
import Hero from "./Components/Hero";
import List from "./Components/List";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="app-container">
      <Nav></Nav>
      <Hero></Hero>
      <List></List>
    </div>
  );
}

export default App;
