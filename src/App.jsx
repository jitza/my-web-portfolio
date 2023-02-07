import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";

const anchors = ["home", "about", "services", "projects"];

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
          <NavBar />
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Services />
          </div>
          <div className="section">
            <Projects />
          </div>
        </div>
      );
    }}
  />
);

export default App;
