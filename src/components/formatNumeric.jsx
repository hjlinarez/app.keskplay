function formatNumeric( { monto }) {

    
    const valor = new Intl.NumberFormat("de-DE").format(monto)
    return (  <>
        { valor } 
    </>);
}
export default formatNumeric;