import { Route, Routes } from "react-router-dom";
import { Dashboard, Transactions } from "../../../pages/authenticated";

import { useCheckAuth } from "../../hooks/useCheckAuth";
import { AuthenticatedLayout } from "../../../components/AuthenticatedLayout";

export const AuthenticatedRouter: React.FC = () => {
  useCheckAuth(true);

  return (
    <Routes>
      <Route element={<AuthenticatedLayout />}>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
};
