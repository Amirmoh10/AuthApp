import React from "react";
import Home from "./Views/Home";
import Blogger from "./Views/Blogger";
import { auth, createUserProfileDocument } from "./Firebase/Firebase";
import SignUp from "./Views/SignUp";
// import PostRoom from "./Views/PostRoom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
    });

    return () => {
      unsubscribeFromAuth(); //close the subscription
    };
  }, []);

  return (
    <div className="  mt-10 mx-auto sm:w-64 md:w-auto lg:w-auto">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route
            exact
            path="/Blogger"
            component={() => <Blogger currentUser={currentUser} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
// <Route exact path="/PostRoom" component={PostRoom} />
