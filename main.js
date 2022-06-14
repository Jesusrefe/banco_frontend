/*
Escribe un programa que declare 2 objetos de cada modelo de datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.
*/

function mostrarGestor(gestor) {
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);
    console.log('-----'); //separacion para la consola
}

function mostrarGestores(gestores) {
    //gestores es un array
    // gestor es un objeto con las propiedades: id, usuario, password, correo
    console.log('----GESTORES----');
    for (const gestor of gestores) {
        mostrarGestor(gestor);
    }
}

function mostrarCliente(cliente) {
    console.log(`id: ${cliente.id}`);
    console.log(`id_gestor: ${cliente.id_gestor}`);
    console.log(`usuario: ${cliente.usuario}`);
    console.log(`password: ${cliente.password}`);
    console.log(`correo: ${cliente.correo}`);
    console.log(`saldo: ${cliente.saldo}`);
}

function mostrarClientes(clientes) {
    console.log('----CLIENTES----');
    for (const cliente of clientes) {
        mostrarCliente(cliente);
    }
}

const gestores = generarGestores();
console.log(gestores);

const gestoresJSON = JSON.stringify(gestores);
console.log(gestoresJSON);
console.log(gestoresJSON.length);

const clientes = generarClientes();
const cliente1 = clientes[0];
const cliente1JSON = JSON.stringify(cliente1);
console.log(cliente1JSON);

// todos los gestores
// console.log(gestores);

// primer gestor
// console.log(gestores[0]);


// console.log(gestor2);
// console.table(cliente2);