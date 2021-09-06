import "./App.css";
import Page1View from "./components/page1/Page1View";
import Page2View from "./components/page2/Page2View";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Page1View}></Route>
          <Route path="/" component={Page2View}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
