import './globals.css'

const NavButton = ({props}) => {
    return(<div className="text-slate-100 font-bold mt-6 mx-6
     hover:text-white   
     hover:transition-all  ease-linear
     hover:p-2
     hover:bg-[--maincolor]
     hover:rounded-full">
        {props}
    </div>)
}

export default NavButton;

