import './scss/app.scss'
import Header from './components/Header'
import About from './components/About'
import Border from './components/Border'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import projects_data from './assets/projects_data.json'
import experience_data from './assets/experience_data.json'

function App() {
  const projects = projects_data.projects;
  const experiences = experience_data.experiences;
  const border_projects_title = "PROJECTS";
  const border_experience_title = "EXPERIENCE";

  return (
    <div className="container">
      <Header></Header>
      <div className="content-container">
        <About></About>
        <Border title={border_projects_title}></Border>
        <Projects projects={projects}></Projects>
        <Border title={border_experience_title}></Border>
        <Experiences experiences={experiences}></Experiences>
      </div>
    </div>
  );
}

export default App;
