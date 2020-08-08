import React from "react";
import Home from "./Views/Home";
import Blogger from "./Views/Blogger";
import { auth } from "./Firebase/Firebase";
// import PostRoom from "./Views/PostRoom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="  h-screen ">
      <Router>
        <Switch>
          <Route
            exact
            path="/Blogger"
            component={() => <Blogger currentUser={currentUser} />}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
// <Route exact path="/PostRoom" component={PostRoom} />
