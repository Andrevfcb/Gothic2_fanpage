import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Body/Home';
import Footer from './Components/Footer/Footer';


function App() {

  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/characters">
        
      </Route>
      <Route path="/shoop">
        
      </Route>
      <Route path="/contact">
       
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
    </Router>
  );
}

export default App;
