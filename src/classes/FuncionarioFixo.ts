import Funcionario from './Funcionario';
import { Escala } from '../enums/enumEscala';

export default class FuncionarioFixo extends Funcionario {
    // ATRIBUTOS
    private escala: Escala;
    private DecimoTerceiro?: number = this.calcularDecimoTerceiro();
    private fgts?: number = this.calcularFgts();
    private inss?: number = this.calcularInss();

    // CONSTRUTOR
    constructor(
        nome: string,
        dataAdmissao: Date,
        cargo: string,
        salario: number,
        escala: Escala,
    ) {
        super(nome, dataAdmissao, cargo, salario);
        this.escala = escala;
    }

    // GETTERS
    getEscala(): Escala {
        return this.escala;
    }

    getDecimoTerceiro(): number | undefined {
        return this.DecimoTerceiro;
    }

    getFgts(): number | undefined {
        return this.fgts;
    }

    getInss(): number | undefined {
        return this.inss;
    }

    // SETTERS
    setEscala(escala: Escala): void {
        this.escala = escala;
    }

    private calcularTempoDeTrabalho(): number {
        const dataAdmisssao = this.getDataAdmissao();
        const dataAtual = new Date();
        return dataAtual.getFullYear() - dataAdmisssao.getFullYear();
    }

    private calcularDecimoTerceiro(): number {
        const tempoTrabalho = this.calcularTempoDeTrabalho();
        return this.getSalario() / tempoTrabalho;
    }

    private calcularFgts(): number {
        return this.getSalario() * 0.08;
    }

    private calcularInss(): number {
        return this.getSalario() * 0.11;
    }
}
