import './globals.css'

const ExpButton = () => {
    return(
        <div className="flex items-center justify-center mt-10">
            <button type="button" className="flex h-10 w-40 rounded-md bg-green-600 p-[2px] text-slate-900 font-semibold hover:bg-green-500">
                <div className="flex h-full w-full items-center justify-center ">
                    Minha experiência
                </div>
            </button>
        </div>
    );
}

export default ExpButton;

