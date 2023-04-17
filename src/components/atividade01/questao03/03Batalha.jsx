import { Children } from 'react';
import "../../../css/Atividade00.css"
const Hero = (props) => {
    const { nome, srcIMG } = props
    return (
        <div>
            <h1>{nome}</h1>
            <img src={srcIMG} alt={nome} width={500}/>
        </div>

    )

}

const Enemy = (props) => {
    const { nome, srcIMG } = props
    return (
        <div>
            <h1>{nome}</h1>
            <img src={srcIMG} alt={nome} width={500} /> 
        </div>

    )


}

const Arena = () => {
    return (
        <div>
            <Hero nome="Baki" srcIMG="https://zonacritica.com.br/wp-content/uploads/2023/03/Baki-Hanma.jpeg"/>
            <Enemy nome="Yujiro" srcIMG="https://zonacritica.com.br/wp-content/uploads/2023/03/Yujiro-Hanma.jpg"/>
        </div>

    )

}

const World = ({children}) => {
    
    return (
        <div>{children}</div>
    )

}

export { Hero, Enemy, Arena, World }