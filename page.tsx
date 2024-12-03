import './globals.css'
import NavBar from './NavBar'
import GitButton from './ExperienceButton'
import { useRouter } from 'next/router';
import Link from 'next/link'


const HomePage = () => {
  
  return (<div>
    <h1 className="text-center text-slate-100 text-8xl mt-[220px] font-extrabold ">
      Vitor Vale
    </h1>
    <div className="mx-6 text-2xl mt-20 font-extrabold ">
      <h1 className="text-slate-400 text-center">Olá, sou um desenvolvedor de 21 anos estudando Ciência da Computação na Universidade Federal de Juiz de Fora-MG</h1>
      <div className="flex flex-row justify-center space-x-2">
         <h1 className="text-slate-400">Estudo principalmente</h1>
         <h1 className="bg-gradient-to-r from-cyan-700 via-cyan-500 to-blue-700 inline-block text-transparent bg-clip-text">Desenvolvimento Web</h1>
        </div>
    </div>
    <NavBar />
    </div>);
};

export default HomePage;
