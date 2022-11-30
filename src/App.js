import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Service from './component/Service/Service';
import Navigation from './component/Navigation/Navigation';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';

import Training from './component/Training/Training'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation></Navigation>



        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/service">
            <Service></Service>
          </Route>

          <Route path="/training">
            <Training></Training>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>



      </BrowserRouter>
    </div>
  );
}

export default App;
