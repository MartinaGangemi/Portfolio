import HomeScreen from "./Pages/HomeScreen";
import NavBar from "./Components/NavBar";
import ResponsiveMenu from "./Components/ResponsiveMenu";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <ResponsiveMenu></ResponsiveMenu>
        <NavBar></NavBar>
        <div className="container">
          <HomeScreen></HomeScreen>
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Skills></Skills>
          <Works></Works>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
