import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

import { useSelector } from "react-redux";
import { Fragment } from "react";

function App() {
  const {isAuthenticated} = useSelector(state => state.auth);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
