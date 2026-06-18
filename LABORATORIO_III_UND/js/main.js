"use strict";

// FASE 1: Primera línea
console.log("Iniciando laboratorio...");


// FASE 2: Variables y Literales Primitivos

const empresa = "JSLab";

let edad = 20;
let esEstudiante = true;

console.log("Empresa:", empresa);
console.log("Edad:", edad);
console.log("Tipo de edad:", typeof edad);

console.log("¿Es estudiante?:", esEstudiante);
console.log("Tipo de esEstudiante:", typeof esEstudiante);

// FASE 3: Literales de Cadena y Plantillas


let nombre = " Duver Rolando ";
let saludo = `Hola ${nombre}, tienes ${edad} años.`;

console.log(saludo);
let descripcionEmpresa = `
Empresa: ${empresa}
Servicio: Desarrollo de aplicaciones web
Estado: Laboratorio de JavaScript activo
`;

console.log(descripcionEmpresa);

// FASE 4: Control de Flujo


let servicio = "desarrollo web";

if (servicio === "desarrollo web") {
    console.log("JSLab puede desarrollar tu página web.");
} else {
    console.log("Servicio no disponible.");
}

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Inicio");
        break;

    case 2:
        console.log("Servicios");
        break;

    case 3:
        console.log("Contacto");
        break;

    default:
        console.log("Opción no válida.");
}



