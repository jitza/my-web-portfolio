import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";

const anchors = ["firstPage", "secondPage", "thirdPage"];

const App = () => (
  <ReactFullpage
    licenseKey={"gplv3-license"}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#7fff00", "#00ffff", "#29ab87"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <div className="section">
            <h3>Section 1</h3>
          </div>
          <div className="section">
            <h3>Section 2</h3>
          </div>
          <div className="section">
            <h3>Section 3</h3>
          </div>
        </div>
      );
    }}
  />
);

export default App;
