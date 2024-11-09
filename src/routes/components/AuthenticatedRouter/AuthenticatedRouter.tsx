import { Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "../../../pages/authenticated";
import { useAuthStore } from "../../../store/auth.store";
import { useEffect } from "react";

export const AuthenticatedRouter: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signIn");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route>
        <Route path="/home" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
