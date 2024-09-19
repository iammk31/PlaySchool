import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Programs from "./Components/Programs";
import Programs2 from "./Components/Programs2";
import Footer from "./Components/Footer";
import ApplyNow from "./Components/ApplyNow";
import LoginAdmin from "./Components/Auth/LoginAdmin";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import NewsAdmin from "./Components/AdminDashboard/NewsAdmin";
import News from "./Components/News";
import RegistrationAdmin from "./Components/AdminDashboard/RegistrationAdmin";
import Contact from "./Components/Contact";
import About from "./Components/About";
import PrivateRoute from './Components/PrivateRoute';


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Home />
          <Programs />
          <Programs2 />
          <Contact />
        </>} />
        <Route path="/Programs" element={<><Programs /><Programs2 /></>} />
        <Route path="/ApplyNow" element={<><ApplyNow /></>} />
        {/* Protect these routes */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/NewsAdmin"
          element={
            <PrivateRoute>
              <NewsAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/RegistrationAdmin"
          element={
            <PrivateRoute>
              <RegistrationAdmin />
            </PrivateRoute>
          }
        />
        <Route path="/Admin" element={<LoginAdmin />} />
        <Route path="/News" element={<News />} />
        <Route path="/RegistrationAdmin" element={<RegistrationAdmin />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
