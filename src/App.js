import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { useAuth } from './Components/hooks/auth-hook';
import { AuthContext } from './Components/context/auth-context';

import Header from './Components/Header/Header';
// import Home from './Components/Body/Home';
// import Characters from './Components/Body/Characters';
import Footer from './Components/Footer/Footer';
import LoadingSpinner from './Components/UIElements/LoadingSpinner';
// import Character from './Components/Body/Character';
// import Shoop from './Components/Body/Shoop';
// import AdminPanel from './Components/Admin/AdminPanel';
// import Item from './Components/Body/Item';
// import Contact from './Components/Body/Contact';

const Home = React.lazy(() => import('./Components/Body/Home'));
const Characters = React.lazy(() => import('./Components/Body/Characters'));
const Character = React.lazy(() => import('./Components/Body/Character'));
const Shoop = React.lazy(() => import('./Components/Body/Shoop'));
const AdminPanel = React.lazy(() => import('./Components/Admin/AdminPanel'));
const Item = React.lazy(() => import('./Components/Body/Item'));
const Contact = React.lazy(() => import('./Components/Body/Contact'));

function App() {

  const { token, login, logout, userId, avatar, role } = useAuth();
  
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/characters" exact>
        <Characters />
      </Route>
      <Route path="/characters/:cid">
        <Character />
      </Route>
      <Route path="/store" exact>
        <Shoop />
      </Route>
      <Route path="/store/:iid">
        <Item />
      </Route>
      <Route path="/contact">
       <Contact />
      </Route>
      <Route path="/admin" exact>
       <AdminPanel />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        avatar: avatar,
        role: role,
        login: login,
        logout: logout
      }}
    >
    <Router>
    <div className="App">
      <Header />
      <Suspense fallback={
        <div className="center">
          <LoadingSpinner />
        </div>
      }>
        {routes}
      </Suspense>
      <Footer />
    </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
