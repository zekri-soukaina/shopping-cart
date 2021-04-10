import CartPage from "./Pages/CartPage";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProductsPage from "./Pages/ProductsPage";
const { Switch, Route } = require("react-router-dom");

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/details" component={ProductsPage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
