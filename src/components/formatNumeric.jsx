function formatNumeric( { monto }) {

    
    //const valor = new Intl.NumberFormat("de-DE").format(monto)
    //const valor = number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const decimals = 2;
    const factor = Math.pow(10, decimals);
    const valor = (Math.round(monto * factor) / factor).toLocaleString('es-ES', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

    
    return (  <>
        { valor } 
    </>);



}
export default formatNumeric;