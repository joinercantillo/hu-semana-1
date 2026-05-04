const nombre = prompt('Dime cual es tu nombre: ');

let edad = prompt('Dime cual es tu edad: ');


if (!isNaN(edad) && edad.trim() !== "") {
    console.log("Es un número válido");
} else {
    console.error("Error:por favor ingresa una edad valiada con numeros");
}

if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad, !Sigue aprendiendo y disfrutando del código!`);
} else {
    alert(`Hola ${nombre}, eres mayor de edad, Prepárate para grandes oportunidades en el mundo de la programación!`);
}

