import { BrowserRouter } from "react-router-dom";
import { DefaultRouter } from "./components/DefaultRouter";
import { useAuthStore } from "../store/auth.store";
import { AuthenticatedRouter } from "./components/AuthenticatedRouter";

export const Routes = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  return (
    <BrowserRouter>
      {isAuthenticated ? <AuthenticatedRouter /> : <DefaultRouter />}
    </BrowserRouter>
  );
};
