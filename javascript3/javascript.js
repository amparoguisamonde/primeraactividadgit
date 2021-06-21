let old = 0;

function pedirdatos(){
    for (a=1; a<=3; a++) {
        var edad1 = parseInt(prompt("persona " + a + " ingrese su edad:"));
        edad(edad1);
        esmayor(edad1);
    }
    alert("La persona mayor de edad tiene " + old + " años");
}

function esmayor(edad) {
    if (old <= edad) {
        old = edad;
    }
}

function edad(edad1) {
    if (edad1>=18) {
        alert("Usted es mayor de Edad");
    } else {
        alert("Usted es menor de Edad");
    }
}
pedirdatos();