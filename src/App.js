import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Foots from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import Navba from "./Components/Navbar/Navbar";
import Properties from "./Components/Properties/Properties";
import SingleProperty from "./Components/Properties/singleProperty/singleProperty";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="website">
    <Router>
      <Navba />
        <Routes>
          <Route exact path="/" element = {<HomePage/>} />
          <Route exact path="/properties" element = {<Properties/>} />
          <Route exact path="/About" element = {<About/>} />
          <Route exact path="/ContactUs" element = {<ContactUs/>} />
          <Route path="/properties/:id" element = {<SingleProperty/>} />
          <Route path="/services/:id" element={<Services/>} />
        </Routes>
      <Foots className="foots"/>
    </Router>
    </div>
  );
}

export default App;
