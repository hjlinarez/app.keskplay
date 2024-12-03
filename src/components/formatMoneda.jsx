function formatMoneda({ numero, moneda }) {

    const valor = new Intl.NumberFormat("de-DE").format(numero)
    return (  <>
        { valor } 
    </>);
}

export default formatMoneda;