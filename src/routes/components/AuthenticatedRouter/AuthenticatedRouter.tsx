import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../../../pages/authenticated";

import { useCheckAuth } from "../../hooks/useCheckAuth";

export const AuthenticatedRouter: React.FC = () => {
  useCheckAuth(true);

  return (
    <Routes>
      <Route>
        <Route path="/home" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
