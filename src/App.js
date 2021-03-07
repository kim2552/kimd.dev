import './scss/app.scss'
import Header from './components/Header'
import About from './components/About'
import Border from './components/Border'
import Projects from './components/Projects'
import projects_data from './assets/projects_data.json'

function App() {
  const projects = projects_data.projects;
  const border_projects_title = "PROJECTS";

  return (
    <div className="container">
      <Header></Header>
      <div className="content-container">
        <About></About>
        <Border title={border_projects_title}></Border>
        <Projects projects={projects}></Projects>
      </div>
    </div>
  );
}

export default App;
