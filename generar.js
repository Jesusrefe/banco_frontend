function generarGestores() {
    const gestor1 = {
        id: 1,
        usuario: 'gestor1',
        password: 'gestor1',
        correo: 'gestor1@gmail.com'
    };
    const gestor2 = {
        id: 2,
        usuario: 'gestor2',
        password: 'gestor2',
        correo: 'gestor2@gmail.com'
    };
    const gestores = [gestor1, gestor2, { //otra manera de añadir un gestor (objeto)
        id: 3,
        usuario: 'gestor3',
        password: 'gestor3',
        correo: 'gestor3@mail.com'
    }];
    return gestores;
}

function generarClientes() {
    const cliente1 = {
        id: 1,
        id_gestor: 1,
        usuario: 'cliente1',
        password: 'cliente1',
        correo: 'cliente1@gmail.com',
        saldo: 1500.25
    };
    const cliente2 = {
        id: 2,
        id_gestor: 1,
        usuario: 'cliente2',
        password: 'cliente2',
        correo: 'cliente2@gmail.com',
        saldo: Math.random() * 1000
    };
    const clientes = [cliente1, cliente2];
    clientes.push({ //otra forma de añadir otro cliente (objeto)
        id: 3,
        id_gestor: 1,
        usuario: 'cliente3',
        password: 'cliente3',
        correo: 'cliente3@gmail.com',
        saldo: 1700.36
    });
    return clientes;
}
