import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect if token is not found
    }
  }, [navigate]); // ✅ Depend on navigate to avoid re-renders

  return <>{children}</>; // ✅ Render children only if token is present
};

export default UserProtectWrapper;
