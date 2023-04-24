import TelaPrincial from "./TelaPrincipal"
import { store } from "./store/store"
import { Provider } from "react-redux"

const MeuIndex = () => {
    return (
        <>
            <Provider store={store}>
                <TelaPrincial />

            </Provider>
        </>
    )
}

export default MeuIndex