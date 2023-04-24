const Imagem = ({id}) => {
    return (
        <>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                style={{width: "300px"}}
                alt=""
            />
        
        </>


    )



};

export default Imagem;