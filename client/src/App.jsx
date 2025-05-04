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
import GalleryPage from "./pages/GalleryPage";
import EventsPage from "./pages/EventsPage";
import BlogsPage from "./pages/BlogsPage";
import Footer from "./components/Footer";
import AdministrationPage from "./pages/AdministrationPage";
import RefreshHandler from "./components/RefreshHandler";
import { ToastContainer } from "react-toastify";
import BlogsForm from "./pages/BlogsUploadPage";
import ContributorsPage from "./pages/ContributorsPage";
import PastEventUploadPage from "./pages/PastEventUploadPage";
import PresentEventUploadPage from "./pages/PresentEventUploadPage";
import EventRegistrationFormCreationPage from "./pages/EventRegistrationFormCreationPage";
import UserSignUpPage from "./pages/userSignupPage";
import UserEditPage from "./pages/UserEditPage";
import UserLoginPage from "./pages/UserLoginPage";

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
