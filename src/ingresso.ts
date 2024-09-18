// Classe abstrata Ingresso
abstract class Ingresso {
    constructor(protected valor: number) {
        this.valor = valor;
    }

    // Método abstrato que deve ser implementado pelas subclasses
    abstract imprimeValor(): void;
}

// Classe Normal, que herda de Ingresso
class Normal extends Ingresso {

    constructor(valor: number) {
        super(valor);
    }

    
    imprimeValor() {
        console.log(`Ingresso Normal - Valor: R$ ${this.valor.toFixed(2)}`);
    }
}

// Classe VIP, que herda de Ingresso e possui um valor adicional
class VIP extends Ingresso {
    
    constructor(valor: number, private valorAdicional: number) {
        super(valor);
        this.valorAdicional = valorAdicional;
    }

    
    imprimeValor() {
        const valorTotal = this.valor + this.valorAdicional;
        console.log(`Ingresso VIP - Valor: R$ ${valorTotal.toFixed(2)} (Valor Base: R$ ${this.valor.toFixed(2)} + Adicional VIP: R$ ${this.valorAdicional.toFixed(2)})`);
    }
}

// Classe Camarote, que herda de Ingresso e também possui um valor adicional
class Camarote extends Ingresso {
   
    constructor(valor: number, private valorAdicional: number) {
        super(valor);
        this.valorAdicional = valorAdicional;
    }

   
    imprimeValor() {
        const valorTotal = this.valor + this.valorAdicional;
        console.log(`Ingresso Camarote - Valor: R$ ${valorTotal.toFixed(2)} (Valor Base: R$ ${this.valor.toFixed(2)} + Adicional Camarote: R$ ${this.valorAdicional.toFixed(2)})`);
    }
}

// ***************************** Testando o sistema ***************************************

// Ingresso Normal
const ingressoNormal = new Normal(100);
ingressoNormal.imprimeValor(); 

// Ingresso VIP
const ingressoVIP = new VIP(100, 50);
ingressoVIP.imprimeValor(); 

// Ingresso Camarote
const ingressoCamarote = new Camarote(100, 80);
ingressoCamarote.imprimeValor(); 
