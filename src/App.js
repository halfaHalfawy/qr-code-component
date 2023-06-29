import logo from "./image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="container" >
      <div className="card">
        <div  className="ElementsColumn">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>
          Improve your front-end skills by building projects
          </h4>
          <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
