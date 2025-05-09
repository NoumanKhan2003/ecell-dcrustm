import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import Footer from "./components/Footer.jsx";
import AdministrationPage from "./pages/AdministrationPage.jsx";
import RefreshHandler from "./components/RefreshHandler.js";
import { ToastContainer } from "react-toastify";
import BlogsForm from "./pages/BlogsUploadPage.jsx";
import ContributorsPage from "./pages/ContributorsPage.jsx";
import PastEventUploadPage from "./pages/PastEventUploadPage.jsx";
import PresentEventUploadPage from "./pages/PresentEventUploadPage.jsx";
import EventRegistrationFormCreationPage from "./pages/EventRegistrationFormCreationPage.jsx";
import UserSignUpPage from "./pages/UserSignupPage.jsx";
import UserEditPage from "./pages/UserEditPage.jsx";
import UserLoginPage from "./pages/UserLoginPage.jsx";

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
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contributors" element={<ContributorsPage />} />
        <Route path="/login" element={<UserLoginPage />} />

        <Route
          path="/blogsForm"
          element={<PrivateRoute element={<BlogsForm />} />}
        />
        <Route
          path="/pastEventForm"
          element={<PrivateRoute element={<PastEventUploadPage />} />}
        />
        <Route
          path="/presentEventForm"
          element={<PrivateRoute element={<PresentEventUploadPage />} />}
        />
        <Route
          path="/eventRegistrationFormCreation"
          element={<PrivateRoute element={<EventRegistrationFormCreationPage />} />}
        />
        <Route
          path="/administration"
          element={<AdminRoute element={<AdministrationPage />} />}
        />
        <Route
          path="/signupUser"
          element={<AdminRoute element={<UserSignUpPage/>} />}
        />
         <Route
          path="/editUser/:id"
          element={<AdminRoute element={<UserEditPage/>} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
