import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "../../../pages/default";
import { Layout } from "../../../pages/default/components/Layout";

export const DefaultRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
