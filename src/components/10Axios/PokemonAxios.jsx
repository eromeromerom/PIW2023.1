import axios from "axios";
import { useEffect, useState } from "react"

const PokemonAxios = () => {
    const [id, setId] = useState(1)
    const [nome, setNome] = useState("bulbassaur")
    const [srcImagemFrente, setSrcImagemFrente] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png")
    const [srcImagemCostas, setSrcImagemCostas] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {

            setLoading(true)
            axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.name)
                        setSrcImagemCostas(response.data.sprites.back_default)
                        setSrcImagemFrente(response.data.sprotes.front_default)
                        setLoading(false)
                    }
                ).catch((error) => console.log(error))
        }
        ,
        [id]
    )

    const renderizarConteudo = () => {
        if (loading) return (
            <>
                <tr>
                    <td colSpan={2}>
                        <h3>Loading...</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img
                            width={"300px"}
                            src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_selective.gif"
                            alt="loading..."
                        />
                    </td>
                    <td>
                        <img
                            width={"300px"}
                            src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_selective.gif"
                            alt="loading..."
                        />
                    </td>
                </tr>
            </>

        ); return (
            <>
                <tr>
                    <td colSpan={2}>
                        <h3>Nome: {nome}</h3>
                        <h3>ID: {id}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img width={"300px"} src={srcImagemFrente} alt={nome} />
                        {/* https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_selective.gif imagem de loading*/}
                    </td>
                    <td>
                        <img width={"300px"} src={srcImagemCostas} alt={nome} />
                    </td>
                </tr>
            </>

        )



    }
    return (
        <>
            <table border={"5px"} width={"700px"} style={{ textAlign: "center" }}>
                <tbody>
                    {renderizarConteudo()}
                    <tr>
                        <td colSpan={2} style={{ textAlign: "center"}}>
                            <button onClick={() => setId((prev) => prev - 1)}>{'<'}- anter.</button>
                            <button onClick={() => setId((prev) => prev + 1)}>próx. -{'>'} </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )

}

export default PokemonAxios