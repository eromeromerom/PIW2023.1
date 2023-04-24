import BotaoIncrementar from "./BotaoIncrementar";
import BotaoDecrementar from "./BotaoDecrementar";
import Imagem from "./Imagem";
import { useState } from "react";

const TelaPrincial = () => {

    const [id, setId] = useState(1);

    const incrementar = () =>{
        setId((prev) => prev + 1)

    }

    const decrementar = () =>{
        setId((prev) => prev - 1)

    }

    return (
        <>
            <table border={"2px"}>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem id={id}/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>
                            <BotaoDecrementar decrementar={decrementar}/>

                        </td>
                        <td style={{textAlign: "center"}}>
                            <BotaoIncrementar incrementar={incrementar}/>
                        </td>
                    </tr>


                </tbody>
            </table>

        </>


    )



};

export default TelaPrincial;