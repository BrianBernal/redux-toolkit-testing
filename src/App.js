import logo from './logo.svg';
import './App.css';
import CounterConnect from './components/counter-connect/CounterConnect';

const Heading = ({ title }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={logo}
      className="App-logo"
      alt="logo"
      style={{ width: "50px", height: "50px" }}
    />
    <h1>{title}</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading title="Connect" />
        <CounterConnect />
        <Heading title="useSelector hook" />
      </header>
    </div>
  );
}

export default App;
