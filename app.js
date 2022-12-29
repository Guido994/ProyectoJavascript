// Algoritmo para calcular el saldo disponible de dinero después de vender en Mercado Libre teniendo en cuenta entre publicación Clásica y Premium, envío gratis y comisión fija de Mercado Libre

// Comisiones según tipo de publicación (Clásica o Premium)

const comisiónClásica = 0.87;    
const comisiónPremium  = 0.685;   

// Envío gratis

const envíoGratis = 700;

// Parámetros por defecto

let precioProd = 0;

// Alerta de bienvenida

alert("Bienvenido! A continuación podrá ingresar el precio de su producto para conocer el saldo de dinero que obtendrá luego de vender en Mercado Libre")

// Solicitud de costo de producto y alerta

precioProd = Number(prompt("Ingrese el precio de su producto a vender en Mercado Libre"));

if (precioProd == 0){
    alert("No ha introducido el costo de producto")
}

// Tipo de publicación

comisión = String(prompt("Qué tipo de publicación desea realizar?"))

if(comisión == "clasica" || "clásica" || "Clasica" || "Clásica" || "CLASICA" || "CLÁSICA"){
    precioProd = precioProd * comisiónClásica;
}   else {
    precioProd = precioProd * comisiónPremium;
}

// Envío gratis?

envío = String(prompt("La publicación cuenta con envío gratis?"))

if(envío == "si" || "sí" || "SI" || "SÍ"){
    precioProd = precioProd - envíoGratis;
}   else {
    precioProd = precioProd;
}

// Alerta final

alert ("El saldo de dinero de esta publicación es de  " + precioProd);