import { useContext } from "react"
import FunctionContextC from "./FunctionContextC"
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
    const { bkgB } = useContext(ColorTheme)
    return (
        <div>
            <h1 style={{ color: "black", backgroundColor: bkgB }}>
                Contexto B
            </h1>
        </div>

    )
}

export default FunctionContextB