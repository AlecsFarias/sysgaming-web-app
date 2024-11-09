import { Route, Routes } from "react-router-dom";
import { Layout } from "../../../pages/default/components/Layout";
import { SignIn, SignUp } from "../../../pages";
import { useCheckAuth } from "../../hooks/useCheckAuth";

export const DefaultRouter: React.FC = () => {
  useCheckAuth(false);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
