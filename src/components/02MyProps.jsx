// const MyProps = (props) => {
//     return (
//         <div>
//             <h1>Meu nome é {props.nome} e sou do curso {props.curso}</h1>

//         </div>
//     )
// }

// const MyProps = (props) => {
//     const {nome, curso} = props
//     return (
//         <div>
//             <h1>Meu nome é {props.nome} e sou do curso {props.curso}</h1>

//         </div>
//     )
// }

const MyProps = ({nome, curso}) => {
    return (
        <div>
            <h1>Meu nome é {nome} e sou do curso {curso}</h1>
        </div>
    )
}
export default MyProps;