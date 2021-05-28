import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import NavBar from './components/NavBar.js';
import './style.scss';
import Announcements from './pages/Announcements.js';
import Feedback from './pages/Feedback.js';
import Error from './pages/error.js';

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
                <Route path="/feedback/" exact>
                    <Feedback/>
                </Route>

                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </Router>
  );
};

export default App;
