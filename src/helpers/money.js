const formatMoney = (cantidad)=>{
    const formatear = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return formatear.format(cantidad);
}

export default formatMoney;