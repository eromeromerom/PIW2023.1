import { Children } from 'react';

const Hero = (props) => {
    const { nome, srcIMG } = props
    return (
        <div>
            <h1>{nome}</h1>
            <img src={srcIMG} alt={nome} />
        </div>

    )

}

const Enemy = (props) => {
    const { nome, srcIMG } = props
    return (
        <div>
            <h1>{nome}</h1>
            <img src={srcIMG} alt={nome} /> 
        </div>

    )


}

const Arena = () => {
    return (
        <div>
            <Hero nome="Baki"/>
            <Enemy nome="Yujiro"/>
        </div>

    )

}

const World = ({children}) => {
    
    return (
        <div>{children}</div>
    )

}

export { Hero, Enemy, Arena, World }