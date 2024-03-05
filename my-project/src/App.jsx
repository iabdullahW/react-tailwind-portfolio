import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Features from "./Features";
import Proj from "./Proj";
import Skills from "./Skills";
import Foot from "./Foot";

// portfolio landing page
function App() {
  return (
    <>
      <div className="bg-[#212428]">
        <Nav />
        <Header />
        <Features />
        <Proj />
        <Skills />
        <Foot />
      </div>
    </>
  );
}

export default App;
