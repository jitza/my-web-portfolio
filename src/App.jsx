import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";

const anchors = ["home", "services", "portfolio"];

const App = () => (
  <>
    <NavBar />
    <ReactFullpage
      licenseKey={"gplv3-license"}
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      // sectionsColor={["#7fff00", "#00ffff", "#29ab87"]}
      render={({ state, fullpageApi }) => {
        return (
          <div>
            <div className="section">
              <Home />
            </div>
            <div className="section">
              <Services />
            </div>
            <div className="section">
              <Portfolio />
            </div>
          </div>
        );
      }}
    />
  </>
);

export default App;
