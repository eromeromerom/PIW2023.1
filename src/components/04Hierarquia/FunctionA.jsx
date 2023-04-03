import FunctionB from "./FunctionB"

const FunctionA = ({sobrenome}) => {
    return (
        <div>
            <FunctionB nome = "Ednaldo" sobrenome = {sobrenome}/>
        </div>
    )
}

export {FunctionA}