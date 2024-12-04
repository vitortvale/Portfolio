import './globals.css'

const TechnologiesButton = () => {
    return(
        <div className="flex items-center justify-center mt-10">
            <button type="button" className="flex h-10 w-[200px] rounded-md bg-gray-800  font-semibold text-slate-200 hover:bg-gray-700">
                <div className="flex h-full w-full items-center justify-center ">
                    Minhas tecnologias
                </div>
            </button>
        </div>

    );
}

export default TechnologiesButton