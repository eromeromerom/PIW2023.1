import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {
    const testeComponente = () => {return(
        <div>teste</div>
    )}
    const cores = {bkgA: "yellow", bkgB: "red", bkgC: "green", bkgD:"gray"}
    return (
         <ColorTheme.Provider value={cores}>
            <h1 style={{backgroundColor: cores.bkgA}}>Função A</h1>
            <FunctionContextB />
            <FunctionContextC />
         </ColorTheme.Provider>
    )
}

export default FunctionContextA