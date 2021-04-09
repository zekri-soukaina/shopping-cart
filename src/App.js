import CartPage from "./Pages/CartPage";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
const { Switch, Route } = require("react-router-dom");

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details" component={DetailsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
