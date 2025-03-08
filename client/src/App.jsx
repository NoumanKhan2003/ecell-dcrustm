import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import Gallery from "./pages/Gallery";
import EventsPage from "./pages/EventsPage";
import BlogsPage from "./pages/BlogsPage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RefreshHandler from "./components/RefreshHandler";
import { ToastContainer } from "react-toastify";
import BlogsForm from "./pages/BlogsUploadPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  return (
      <Router>
        <ToastContainer />
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogsForm" element={<BlogsForm />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
