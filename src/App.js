import logo from "./logo.svg";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import AttendancePage from "./components/AttendancePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const user="Omeir Fawaz";
  const userType="Admin";

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <h1>SearchPage</h1>
          </Route>

          <Route path="/attendance" exact>
            <div className="app__page">

            <Sidebar user={user} userType={userType} />
            <AttendancePage user={user} />
            </div>
          </Route>

          <Route path="/" exact>
            <div className="app__page">
              <Sidebar user={user} userType={userType} />
              <Homepage user={user}/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
