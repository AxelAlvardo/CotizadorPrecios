const calculatorTotal = (cantidad, plazo) => {
    let total;

    //MIENTRAS MAYOR ES LA CANTIDAD MENOR ES EL INTERES
    if (cantidad < 500) {

        total = cantidad * 1.5;

    } else if (cantidad >= 500 && cantidad <= 1000) {

        total = cantidad * 1.4;

    } else if (cantidad >= 1000 && cantidad <= 5000) {

        total = cantidad * 1.3;

    } else if (cantidad >= 5000 && cantidad <= 10000) {

        total = cantidad * 1.2;
        
    }else if(cantidad > 10000){

        total = cantidad * 1.1
    }

    //MIENTRAS MAS PLAZO MAS INTERES


    if (plazo === 6) {
        total *= 1.1;
    }else if(plazo === 12){
        total *= 1.2;
    }else if(plazo === 24){
        total *= 1.3;
    }

    return total;

}

export default calculatorTotal;