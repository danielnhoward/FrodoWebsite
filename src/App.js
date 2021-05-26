import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import NavBar from './components/NavBar.js';
import './style.scss';
import Announcements from './pages/Announcements.js';

function App() {
  return (
        <Router>
            <NavBar/>
            
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/announcements/" exact>
                    <Announcements/>
                </Route>
            </Switch>
        </Router>
  );
};

export default App;
