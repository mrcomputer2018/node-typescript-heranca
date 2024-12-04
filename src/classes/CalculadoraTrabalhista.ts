import Calculadora from './calculadora'

export default class CalculadoraTrabalhista extends Calculadora {

    calcularInss(salarioBruto: number) {
        let inss = 0

        if (salarioBruto > 4000.04) {
            inss = salarioBruto * 14 / 100
        } else if (salarioBruto > 2666.69) {
            inss = salarioBruto * 12 / 100
        } else if (salarioBruto > 1412.01) {
            inss = salarioBruto * 9 / 100
        } else {
            inss = salarioBruto * 7.5 / 100
        }

        if (inss > 908.85) inss = 908.85

        this.setResultado(inss)

        return this.getResultado()
    }

    calcularImpostoDeRenda(renda: number): number {
        let imposto = 0
        if (renda <= 2112) imposto = 0;
        else if (renda <= 2826.65) imposto = renda * 0.075;
        else if (renda <= 3751.05) imposto =  renda * 0.15;
        else if (renda <= 4664.68) imposto = renda * 0.225;
        else return imposto =  renda * 0.275;
        this.setResultado(imposto)
        return this.getResultado()
    };

    calcularSalarioLiquido(salarioBruto: number) {
        const descontoInss = this.calcularInss(salarioBruto)
        const descontoImpostoRenda = this.calcularImpostoDeRenda(salarioBruto)
        this.setResultado(salarioBruto - descontoInss - descontoImpostoRenda)
        return this.getResultado()
    }

    calcularSalarioFerias(salarioMensal: number) {
        const PORCENTAGEM_BASE_CALCULO_FERIAS = 33
        const tercoSalario = this.porcentagem(salarioMensal, PORCENTAGEM_BASE_CALCULO_FERIAS)
        this.setResultado( salarioMensal + tercoSalario)
        return this.getResultado()
    }

}