import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Programs from "./Components/Programs";
import Programs2 from "./Components/Programs2";
import Footer from "./Components/Footer";
import EduKidNews from "./Components/News";
import ApplyNow from "./Components/ApplyNow";

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Home />
          <Programs />
          <Programs2 />
          <EduKidNews />

        </>} />
        <Route path="/ApplyNow" element={<><ApplyNow /></>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
