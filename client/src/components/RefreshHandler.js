import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setIsAuthenticated, setIsAdmin }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const loggedInUserType = localStorage.getItem("loggedInUserType");

    if (loggedInUser) {
      setIsAuthenticated(true);

      if (loggedInUserType === "Admin") {
        setIsAdmin(true);
        if (["/logout", "/login"].includes(location.pathname)) {
          navigate("/", { replace: true });
        }
      } else {
        setIsAdmin(false);
        if (
          ["/logout", "/login", "/signupUser", "/administration"].includes(
            location.pathname
          )
        ) {
          navigate("/", { replace: true });
        }
      }
    } else {
      setIsAuthenticated(false);
      setIsAdmin(false);

      if (
        ["/logout", "/signupUser", "/administration", "/blogsForm"].includes(
          location.pathname
        )
      ) {
        navigate("/", { replace: true });
      }
    }
  }, [location.pathname, navigate, setIsAuthenticated, setIsAdmin]);

  return null;
}

export default RefreshHandler;
