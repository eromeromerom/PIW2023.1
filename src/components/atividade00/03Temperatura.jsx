const Temperatura = () => {
    const CtoF = (celsius) => {
        return ((celsius * 1.8) + 32).toFixed(2)
    }
    const FtoC = (fahrenheit) => {
        return ((fahrenheit - 32) / 1.8).toFixed(2)
    }
    const KtoCF = (kelvin) => {
        const celsius = kelvin - 273
        const fahrenheit = CtoF(celsius)
        return {celsius, fahrenheit}
    }
    return(
        <div>
           <h3>25C em F é {CtoF(25)}</h3>
           <h3>25F em C é {FtoC(25)}</h3>
           <h3>25K em C é {KtoCF(25).celsius}</h3> 
           <h3>25K em F é {KtoCF(25).fahrenheit}</h3> 
           <h2>Teste com git hub 2 </h2>
           <h2>teste git 3 </h2>
        </div>
    )

}

export default Temperatura