import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "../pages/default";
import { Dashboard } from "../pages/authenticated";

export const defaultRouter = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export const AuthenticatedRouter = createBrowserRouter([
  {
    path: "/signin",
    element: <Dashboard />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={defaultRouter} />;
};
