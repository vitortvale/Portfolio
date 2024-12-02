import './globals.css'

const GitButton = () => {
    return(<div className="flex justify-center">
        <div className="flex justify-center w-[10%] p-2 mt-8 text-white rounded-full bg-[--maincolor]
        hover:bg-green-200">
            <h1 className="tracking-tighter">
                Conheça meu GitHub
                <a href="https://gihub.com/vitortvale"></a>
            </h1>
        </div>
    </div>);
}

export default GitButton;