import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { lightTheme } from "./components/utils/Themes";
import Navbar from "../src/components/navbar";
import Welcome from "../src/components/welcome";

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
        <Body>
          <Welcome />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
