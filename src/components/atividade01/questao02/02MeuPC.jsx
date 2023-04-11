const PlacaMae = (props) => {
    const { nome, preco } = props
    return (
        <div>
            <h2>Placa-Mãe: </h2>
            {nome}
            <h2>Preço: </h2>
            R$ {preco}
        </div>

    )


}

const Memoria = (props) => {
    const { nome, preco } = props
    return (
        <div>
            <h2>Memória RAM: </h2>
            {nome}
            <h2>Preço: </h2>
            R$ {preco}
        </div>

    )

}

const PlacaDeVideo = (props) => {
    const { nome, preco } = props
    return (
        <div>
            <h2>Placa de Vídeo: </h2>
            {nome}
            <h2>Preço: </h2>
            R$ {preco}
        </div>

    )

}


export { PlacaMae, Memoria, PlacaDeVideo }