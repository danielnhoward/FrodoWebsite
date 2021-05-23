import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import NavBar from './components/NavBar.js';
import './style.scss';

function App() {
  return (
        <Router>
            {/* <NavBar></NavBar> */}
            
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
