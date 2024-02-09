import Foots from "./Components/Footer/Footer";
import Navba from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import ContactUs from "./Components/ContactUs/ContactUs";
import Properties from "./Components/Properties/Properties";
import About from "./Components/About/About";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SingleProperty from "./Components/Properties/singleProperty/singleProperty";

function App() {
  return (
    <Router>
      <Navba />
        <Routes>
          <Route exact path="/" element = {<HomePage/>} />
          <Route exact path="/properties" element = {<Properties/>} />
          <Route exact path="/About" element = {<About/>} />
          <Route exact path="/ContactUs" element = {<ContactUs/>} />
          <Route path="/properties/:id" element = {<SingleProperty/>} />
        </Routes>
      <Foots />
    </Router>
  );
}

export default App;
