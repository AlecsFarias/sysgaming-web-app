import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/authenticated";
import { DefaultRouter } from "./components/DefaultRouter";

export const AuthenticatedRouter = createBrowserRouter([
  {
    path: "/signin",
    element: <Dashboard />,
  },
]);

export const Routes = () => {
  return (
    <BrowserRouter>
      <DefaultRouter />
    </BrowserRouter>
  );
};
