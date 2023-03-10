import HomeScreen from "./Pages/HomeScreen";
import NavBar from "./Components/NavBar";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <NavBar></NavBar>
        <div className="container">
          <HomeScreen></HomeScreen>
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Skills></Skills>
          <Works></Works>
        </div>
      </div>
    </div>
  );
}

export default App;
