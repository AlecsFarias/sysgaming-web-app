import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "../../../pages";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { DefaultLayout } from "../../../components/DefaultLayout";

export const DefaultRouter: React.FC = () => {
  useCheckAuth(false);

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
