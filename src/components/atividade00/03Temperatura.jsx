const Temperatura = () => {
    // const CtoF = (celsius) => {
    //     return ((celsius * 1.8) + 32).toFixed(2)
    // }
    const CtoF = (celsius) => ((celsius * 1.8) + 32).toFixed(2)
    const FtoC = (fahrenheit) => ((fahrenheit - 32) / 1.8).toFixed(2)
    const KtoCF = (kelvin) => {
        const celsius = kelvin - 273
        const fahrenheit = CtoF(celsius)
        return {celsius, fahrenheit}
    }
    const n = 25
    const {KtoC, KtoF} = KtoCF(n)
    return(
        <div>
           <h3>{n} °C em °F é {CtoF(n)}</h3>
           <h3>{n} °F em °C é {FtoC(n)}</h3>
           <h3>{n} K em °C é {KtoC}</h3> 
           <h3>{n} K em °F é {KtoF}</h3> 
        </div>
    )

}

export default Temperatura