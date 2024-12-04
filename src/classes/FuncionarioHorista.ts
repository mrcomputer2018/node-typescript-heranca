import Funcionario from './Funcionario';

export default class FuncionarioHorista extends Funcionario {
    //atributos
    private horasTrabalhadas: number;
    private valorHora: number;

    //construtor
    constructor(
        horasTrabalhadas: number,
        valorHora: number,
        nome: string,
        adatAdmissao: Date,
        cargo: string,
        salario: number,
    ) {
        super(nome, adatAdmissao, cargo, salario);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
    }

    //getters
    getHorasTrabalhadas(): number {
        return this.horasTrabalhadas;
    }

    getValorHora(): number {
        return this.valorHora;
    }
}
