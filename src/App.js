import './scss/app.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import projects_data from './assets/projects_data.json';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const projects = projects_data.projects;

  return (
    <div className="container">
      <Router>
        <Header></Header>
        <div className="content-container">
            <Switch>
              <Route exact path="/about">
                <About></About>
              </Route>
              <Route exact path="/projects">
                <Projects projects={projects}></Projects>
              </Route>
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/">
                <div className="description-container">
                  <div style={{textAlign: "center", margin: "auto"}}>
                    <p>
                      Page does not exist.
                    </p>
                  </div>
                </div>
              </Route>
            </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
