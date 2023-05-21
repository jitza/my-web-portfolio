import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";

const anchors = [
  "home",
  "about",
  "services",
  "portfolio",
  "experience",
  "contact",
];

const App = () => (
  <>
    <NavBar />
    <ReactFullpage
      licenseKey={"gplv3-license"}
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      render={({ state, fullpageApi }) => {
        return (
          <div class="bg-gradient-to-b from-slate-900 to-gray-900 text-gray-500">
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
              <Portfolio />
            </div>
            <div className="section">
              <Experience />
            </div>
            <div className="section">
              <Contact />
            </div>
          </div>
        );
      }}
    />
  </>
);

export default App;
