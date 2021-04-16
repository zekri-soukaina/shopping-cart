import NavBar from "./Components/NavBar";
import Routers from "./Components/Routers";
import { ContextProvider } from "./Pages/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <NavBar />
        <Routers />
      </ContextProvider>
    </>
  );
}

export default App;
