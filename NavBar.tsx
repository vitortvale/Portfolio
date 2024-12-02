import './globals.css'
import NavButton from './NavButton';

const NavBar = () => {
    return (<div>
        <div className="flex flex-row justify-center ">
        <NavButton props="Sobre mim"/>
        <NavButton props="Experiência e Tecnologias"/>
        <NavButton props="Projetos"/>
        </div>
    </div>);
};

export default NavBar;