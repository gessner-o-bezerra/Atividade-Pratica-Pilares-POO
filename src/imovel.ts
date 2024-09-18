class Imovel {
    constructor(protected endereco: string, protected preco: number) {
        this.endereco = endereco;
        this.preco = preco;
    }

    
    imprimeDetalhes() {
        console.log(`Endereço: ${this.endereco}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

// Classe Novo, que herda de Imovel e possui um valor adicional
class Novo extends Imovel {
  

    constructor(endereco: string, preco: number, private adicionalPreco: number) {
        super(endereco, preco);
        this.adicionalPreco = adicionalPreco;
    }

    
    getAdicionalPreco(): number {
        return this.adicionalPreco;
    }

   
    setAdicionalPreco(adicionalPreco: number) {
        if (adicionalPreco >= 0) {
            this.adicionalPreco = adicionalPreco;
        } else {
            console.log("O valor não pode ser negativo.");
        }
    }

    
    imprimeDetalhes() {
        const precoFinal = this.preco + this.adicionalPreco;
        console.log(`Endereço: ${this.endereco}, Preço Base: R$ ${this.preco.toFixed(2)}, Adicional: R$ ${this.adicionalPreco.toFixed(2)}, Preço Final: R$ ${precoFinal.toFixed(2)}`);
    }
}

// Classe Velho, que herda de Imovel e possui um desconto
class Velho extends Imovel {

    constructor(endereco: string, preco: number, private descontoPreco: number) {
        super(endereco, preco);
        this.descontoPreco = descontoPreco;
    }

   
    getDescontoPreco(): number {
        return this.descontoPreco;
    }

    
    setDescontoPreco(descontoPreco: number) {
        if (descontoPreco >= 0) {
            this.descontoPreco = descontoPreco;
        } else {
            console.log("Erro: O valor do desconto não pode ser negativo.");
        }
    }

    // Método para imprimir o valor do desconto e o preço final
    imprimeDetalhes() {
        const precoFinal = this.preco - this.descontoPreco;
        console.log(`Endereço: ${this.endereco}, Preço Base: R$ ${this.preco.toFixed(2)}, Desconto: R$ ${this.descontoPreco.toFixed(2)}, Preço Final: R$ ${precoFinal.toFixed(2)}`);
    }
}

// ******************** Testando o sistema *****************************

// Imóvel Novo com adicional no preço
const imovelNovo = new Novo("Rua das Flores, 123", 300000, 50000);
imovelNovo.imprimeDetalhes(); 

// Imóvel Velho com desconto no preço
const imovelVelho = new Velho("Av. Brasil, 456", 200000, 30000);
imovelVelho.imprimeDetalhes(); 
