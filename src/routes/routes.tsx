import { BrowserRouter } from "react-router-dom";
import { DefaultRouter } from "./components/DefaultRouter";
import { AuthenticatedRouter } from "./components/AuthenticatedRouter";

export const Routes = () => {
  return (
    <BrowserRouter>
      <AuthenticatedRouter />
      <DefaultRouter />
    </BrowserRouter>
  );
};
