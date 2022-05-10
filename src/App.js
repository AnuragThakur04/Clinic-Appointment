import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import BookAppointment from "./BookAppointment";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import AboutDoctor from "./Pages/AboutDoctor";
import Location from "./Pages/Location";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutUs />} path="/about" />
          <Route element={<Services />} path="/services" />
          <Route element={<AboutDoctor />} path="/about/doctor" />
          <Route element={<Location />} path="/location" />
          <Route element={<BookAppointment />} path="/book" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
