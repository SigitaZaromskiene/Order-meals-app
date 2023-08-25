import "./Assets/App.scss";
import { GlobalProvider } from "./Components/Global";
import Hero from "./Components/Hero";
import List from "./Components/List";
import Nav from "./Components/Nav";

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Nav></Nav>
        <Hero></Hero>
        <List></List>
      </div>
    </GlobalProvider>
  );
}

export default App;
