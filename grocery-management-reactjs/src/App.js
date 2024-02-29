import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "../src/components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { lightTheme } from "./components/utils/Themes";

const Body = styled.div`
  float: right;
  background-color: ${({ theme }) => theme.background};
  width: 1134px;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body></Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
