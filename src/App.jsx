import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ReactFullpage from "@fullpage/react-fullpage";
import StarryBackground from "./components/StarryBackground";
import "./index.css";
import MovingParticlesBg from "./components/MovingParticlesBg";
import MeteoriteBg from "./components/MeteoriteBg";
// import Starfield from 'react-starfield';

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
    {/* <MovingParticlesBg /> */}
        {/* <StarryBackground /> */}
    {/* <MeteoriteBg /> */}
    {/* <h1 className="text-white text-center text-4xl">testing</h1> */}
    {/* <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
      /> */}
    <NavBar />
    <ReactFullpage
      licenseKey={"gplv3-license"}
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      render={({ state, fullpageApi }) => {
        return (
          <div className="bg-gradient-to-b from-slate-900 to-gray-900 text-gray-500">
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
