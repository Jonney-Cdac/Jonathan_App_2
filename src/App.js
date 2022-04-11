import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import { RegisterUser } from "./components/RegisterUser";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />

        <div className="container-fluid">
          <Switch>
            <Route path="/contactus" component={ContactUs}></Route>
            <Route path="/register" component={RegisterUser}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
