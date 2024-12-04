import { randomUUID } from 'crypto';

export default class Funcionario {
    // ATRIBUTOS
    readonly matricula: string;
    private nome: string;
    private dataAdmissao: Date;
    private cargo: string;
    private salario: number;
    private dataNascimento?: Date;
    private dataFerias?: Date;
    private endereco?: string;
    private telefone?: string;
    private email?: string;

    // CONSTRUTOR
    constructor(
        nome: string,
        dataAdmissao: Date,
        cargo: string,
        salario: number,
        dataNascimento?: Date,
        dataFerias?: Date,
        endereco?: string,
        telefone?: string,
        email?: string,
    ) {
        this.matricula = randomUUID().substring(0, 8);
        this.nome = nome;
        this.dataAdmissao = dataAdmissao;
        this.cargo = cargo;
        this.salario = salario;
        this.dataNascimento = dataNascimento;
        this.dataFerias = dataFerias;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
    }

    //getters
    getMatricula(): string {
        return this.matricula;
    }

    getNome(): string {
        return this.nome;
    }

    getDataAdmissao(): Date {
        return this.dataAdmissao;
    }

    getCargo(): string {
        return this.cargo;
    }

    getSalario(): number {
        return this.salario;
    }

    getDataNascimento(): Date | undefined {
        return this.dataNascimento;
    }

    getDataFerias(): Date | undefined {
        return this.dataFerias;
    }

    getEndereco(): string | undefined {
        return this.endereco;
    }

    getTelefone(): string | undefined {
        return this.telefone;
    }

    getEmail(): string | undefined {
        return this.email;
    }

    //setters
    setNome(nome: string): void {
        this.nome = nome;
    }

    setDataAdmissao(dataAdmissao: Date): void {
        this.dataAdmissao = dataAdmissao;
    }

    setCargo(cargo: string): void {
        this.cargo = cargo;
    }

    setSalario(salario: number): void {
        this.salario = salario;
    }

    setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    setDataFerias(dataFerias: Date): void {
        this.dataFerias = dataFerias;
    }

    setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}
