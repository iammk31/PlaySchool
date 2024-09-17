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


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Home />
          <Programs />
          <Programs2 />
        </>} />
        <Route path="/Programs" element={<><Programs /><Programs2 /></>} />
        <Route path="/ApplyNow" element={<><ApplyNow /></>} />
        <Route path="/AdminDashboard" element={<><AdminDashboard /></>} />
        <Route path="/NewsAdmin" element={<><NewsAdmin /></>} />
        <Route path="/Admin" element={<LoginAdmin />} />
        <Route path="/News" element={<News />} />
        <Route path="/RegistrationAdmin" element={<RegistrationAdmin />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
