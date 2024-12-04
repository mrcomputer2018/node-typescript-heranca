import Funcionario from './classes/Funcionario';
import FuncionarioFixo from './classes/FuncionarioFixo';
import FuncionarioHorista from './classes/FuncionarioHorista';
import { Escala } from './enums/enumEscala'; // Adjust the path as necessary

const salario: number = 5000;

const funcionario = new Funcionario(
    'João Lucas',
    new Date('2021-01-01'),
    'Desenvolvedor',
    salario,
);

console.log(funcionario.getMatricula());

const salarioFixo: number = 3000;

const funcionario2 = new FuncionarioFixo(
    'Jean Lucas',
    new Date('2020-08-03'),
    'Desenvolvedor Front-end',
    salarioFixo,
    Escala.CincoPorDois,
);

console.log("\n" + funcionario2.getMatricula());
console.log('Nome: ' + funcionario2.getNome());
console.log(
    'Valor do decimo terceiro: R$' +
        funcionario2.getDecimoTerceiro()?.toFixed(2),
);
console.log('Valor do FGTS: R$' + funcionario2.getFgts()?.toFixed(2));
console.log('Valor do INSS: R$' + funcionario2.getInss()?.toFixed(2));

/* 
6d4c31bd
ebdcd4b9
Nome: Jean Lucas
Valor do decimo terceiro: R$750.00
Valor do FGTS: R$240.00
Valor do INSS: R$330.00 
*/

const salarioHorista: number = 7000;
const funcionario3 = new FuncionarioHorista(
    16,
    44,
    'Marcus Vale',
    new Date('1999-02-01'),
    'Desenvolvedor Back-end',
    salarioHorista,
);

console.log("\n" + funcionario3.getMatricula());
console.log('Nome: ' + funcionario3.getNome());
