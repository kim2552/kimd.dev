import './scss/app.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import projects_data from './assets/projects_data.json';
import experience_data from './assets/experience_data.json';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const projects = projects_data.projects;
  const experiences = experience_data.experiences;

  return (
    <div className="container">
      <Router>
        <Header></Header>
        <div className="content-container">
            <Switch>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/projects">
                <Projects projects={projects}></Projects>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
