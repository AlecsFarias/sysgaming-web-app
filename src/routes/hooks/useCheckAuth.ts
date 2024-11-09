import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { useEffect } from "react";

export const useCheckAuth = (authenticatedRoute?: boolean) => {
  const navigate = useNavigate();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  useEffect(() => {
    if (isAuthenticated && !authenticatedRoute) {
      navigate("/home");
    }

    if (!isAuthenticated && authenticatedRoute) {
      navigate("/signIn");
    }
  }, [authenticatedRoute, isAuthenticated, navigate]);
};
