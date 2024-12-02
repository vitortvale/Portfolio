import './globals.css'

const NavButton = ({props}) => {
    return(<div className="text-slate-400 font-bold mt-6 mx-6
     hover:text-black   
     hover:transition-all duration-500 ease-linear
     hover: scale-">
        {props}
    </div>)
}

export default NavButton;

