import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import SignUpPage from "./pages/SignUpPage"
import AdministrationPage from "./pages/AdministrationPage";
import RefreshHandler from "./components/RefreshHandler";
import { ToastContainer } from "react-toastify";
import BlogsForm from "./pages/BlogsUploadPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("isAdmin", isAdmin);
  }, [isAuthenticated, isAdmin]);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  const AdminRoute = ({ element }) => {
    return isAdmin ? element : <Navigate to="/" />;
  };
  return (
    <Router>
      <ToastContainer />
      <RefreshHandler
        setIsAuthenticated={setIsAuthenticated}
        setIsAdmin={setIsAdmin}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route
          path="/blogsForm"
          element={<PrivateRoute element={<BlogsForm />} />}
        />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/administration"
          element={<AdminRoute element={<AdministrationPage />} />}
        />
          <Route
          path="/signup"
          element={<AdminRoute element={<SignUpPage />} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
