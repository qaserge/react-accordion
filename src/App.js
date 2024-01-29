import "./App.css";
import Accordion from "./components/Accordion";
import phrases from "./quebecoisSlangPhrases";

function App() {
  return (
    <div className="App">
      <Accordion data={phrases} />
    </div>
  );
}

export default App;
