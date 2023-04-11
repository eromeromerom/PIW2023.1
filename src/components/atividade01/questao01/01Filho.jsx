import "../../../css/Atividade00.css"
// colocar o nome props não é o ideal, mas vai deixar meu código mais explícito
const Filho = (props) => {
    const {peso, altura} = props
    // const IMC = ({peso,altura}) => {
    //     return peso/(altura*altura)
    // }
    const IMC = ({peso,altura}) => peso/(altura*altura)

    const redenrizarMensagem = (imc) => {
        if (imc < 18) return <h3>Abaixo do peso</h3>
        else if (imc > 25) return <h3>Acima do peso</h3>
        else return <h3>Peso ideal</h3>  

    }
    const imc = (IMC({peso, altura})).toFixed(2)
    return (
        <div>
            <h1>O IMC é {imc}</h1>
            <h3>{redenrizarMensagem(imc)}</h3>
        </div>

    )

}

export default Filho