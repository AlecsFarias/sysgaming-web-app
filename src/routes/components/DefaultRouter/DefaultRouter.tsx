import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "../../../pages/default/components/Layout";
import { SignIn, SignUp } from "../../../pages";
import { useAuthStore } from "../../../store/auth.store";
import { useEffect } from "react";

export const DefaultRouter: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
