import './globals.css'

const CurriculumButton = () => {
    return(
        <div className="flex items-center justify-center mt-10 pl-[10px]">
            <button type="button" className=" items-center justify-center rounded-md font-semibold text-white
            bg-gradient-to-r from-blue-700 via-green-300 to-green-400 
            p-[2px] text-white ">
                <div className="flex items-center justify-center space-x-2 p-2 rounded-md bg-gray-900 t hover:bg-slate-800 pt-2 pb-2 ">
                    <p>Baixar Currículo</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
            </button>
        </div>

    );
}

export default CurriculumButton


