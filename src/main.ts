import { Cliente } from "./customer/customer";

const cliente = Cliente.new({name: 'Oslan', idade: 90});

console.log(cliente.toJson());