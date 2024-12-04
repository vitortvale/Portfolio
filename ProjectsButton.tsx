import './globals.css'

const ProjectsButton = () => {
    return(
        <div className="flex items-center justify-center mt-10">
            <button type="button" className="flex h-10 w-40 rounded-md bg-gray-800 p-[2px] font-semibold text-slate-200 hover:bg-gray-700">
                <div className="flex h-full w-full items-center justify-center ">
                    Explorar projetos
                </div>
            </button>
        </div>

    );
}

export default ProjectsButton