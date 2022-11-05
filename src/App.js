import styled from "styled-components";
import Routes from "./routes"
import LoginFormikYup from "./pages/LoginFormikYup";

const AppContainer = styled.div`
  width: min(100%, 1500px);
  max-width: 1500px;
`


function App() {
  return (
    <div className="App">
      {/* <Cards variante="basicas" /> */}
    
    <AppContainer>
      <Routes />
    </AppContainer>
    </div>
  );
}

export default App;
