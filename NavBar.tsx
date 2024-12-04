import './globals.css'
import ExpButton from './ExperienceButton'
import CurriculumButton from './CurriculumButton'
import ProjectsButton from './ProjectsButton'
import TechnologiesButton from './TechStack'

const NavBar = () => {
    return (<div>
        <div className="flex items-center justify-center space-x-10">
        <ExpButton />
        <ProjectsButton />
        <TechnologiesButton />
        <CurriculumButton />
        </div>
    </div>);
};

export default NavBar;