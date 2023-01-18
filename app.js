// Algoritmo para calcular el saldo disponible de dinero después de vender en Mercado Libre teniendo en cuenta entre publicación Clásica y Premium, envío gratis y comisión fija de Mercado Libre

// Comisiones según tipo de publicación (Clásica o Premium)

const comisiónClásica = 0.87;    
const comisiónPremium  = 0.685;   

// Envío gratis

const envíoGratis = 700;

// Parámetros por defecto

let precioProd = 0;

// Alerta de bienvenida

function saludar(){
        let usuario = prompt("Ingresa tu nombre")
        alert("Bienvenido " + usuario + "! A continuación podrá ingresar el precio de su producto para conocer el saldo de dinero que obtendrá luego de vender en Mercado Libre")
    }

saludar()

// Solicitud de costo de producto y alerta

precioProd = Number(prompt("Ingrese el precio de su producto a vender en Mercado Libre"));

if (precioProd == 0){
    alert("No ha introducido el costo de producto")
}

// Tipo de publicación

const comisionesClásica = [0.87,0.85]
const comisionesPremium = [0.685,0.69,0.67]
const comisionesTodas = comisionesClásica.concat(comisionesPremium)
alert("Porcentajes de comisión:")
comisionesTodas.forEach(Element => {
    alert(Element)
})

// alert (comisionesTodas)

comisión = Number(prompt("Qué tipo de publicación desea realizar? 1)Clásica 0.87 2)Premium 0.685"))

if(comisión === 1){
    precioProd = precioProd * comisiónClásica;
}   
else if(comisión === 2) {
    precioProd = precioProd * comisiónPremium;
}
else {
    alert("Presiona 1 para clásica o 2 para Premium")
}

// Envío gratis?

envío = Number(prompt("La publicación cuenta con envío gratis? 1)Sí 2)No"))

if(envío === 1){
    precioProd = precioProd - envíoGratis;
}   
else if(envío === 2) {
    precioProd = precioProd;
}
else{
    alert("Dato no válido") 
}

// Alerta final

alert ("El saldo de dinero de esta publicación es de  " + precioProd);

const mercadoLibre = {
        origen: "Argentina",
        fundación:"2 de Agosto de 1999",
        empleados: "8500",
        formaLegal: "Sociedad por Acciones",
        líder: true
}

alert (mercadoLibre)

// MI IDEA ACÁ ERA QUE SE MUESTRE TODA LA INFO DE LA SOCIEDAD PERO NO ME ESTARÍA FUNCIONANDO