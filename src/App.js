import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Layout from './components/Layout';
import Navp from './components/Navp';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
       <Router>
          <Navp/>
          <Switch>
          <Route path="/"  exact component={Layout}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          
          </Switch>
          </Router>
    </div>
  );
}

export default App;
