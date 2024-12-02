import './globals.css'
import NavBar from './NavBar'
import GitButton from './GitButton'

const HomePage = () => {
  return (<div>
    <NavBar />
    <h1 className="text-center text-slate-100 text-8xl mt-[220px] font-extrabold tracking-tighter">
      Vitor Vale
    </h1>
    <p className="text-center text-slate-300 text-3xl font-extrabold mx-24 pt-10 ">
      Olá, sou um desenvolvedor de 21 anos que estuda Ciência da Computação na Universidade Federal de Juiz de Fora.
       Estudo principalmente Desenvolvimento Web e Ciência de Dados
    </p>
    <GitButton />
  </div>);
};

export default HomePage;
