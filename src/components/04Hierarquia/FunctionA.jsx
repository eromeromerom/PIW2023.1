import FunctionB from "./FunctionB"

const FunctionA = ({sobrenome}) => {
    return (
        <div>
            <FunctionB nome = "Edinaldo" sobrenome = {sobrenome}/>
        </div>
    )
}

export {FunctionA}