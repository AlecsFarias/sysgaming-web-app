import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";
import { lightTheme } from "./utils/themes/light";
import { Routes } from "./routes";

function App() {
  return (
    <CssVarsProvider theme={lightTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
      <Routes />
    </CssVarsProvider>
  );
}

export default App;
