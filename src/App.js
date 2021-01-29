import { Route, Switch } from "react-router-dom";
import "./App.css";

import Welcome from "./components/Welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="D'Andre" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
