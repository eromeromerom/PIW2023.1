import "../../css/Atividade00.css"
const MeusDados = (props) => {
    const {nome, curso, uni} = props

    return (
        <div>
            <h1>Meu nome é {nome}</h1>
            <h1>Sou graduando em {curso} pela {uni}</h1>
        </div>
    )

}

export default MeusDados