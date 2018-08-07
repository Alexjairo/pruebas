function calcular() {

    let n1 = document.getElementById("numero1").value;
    let respuesta = "";

    for(let i = 1; i = n1; i++){
        n1=n1-1;
        respuesta = respuesta + (n1*3)  + ", " ;
    }







    document.getElementById("respuesta").innerHTML = respuesta;
}