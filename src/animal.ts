// Superclasse Animal
class Animal {

    constructor(protected nome: string, protected idade: number, protected especie: string) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    // ******************* Métodos comum a todos os animais ****************
    comer() {
        console.log(`O ${this.nome} da espécie ${this.especie} está comendo.`);
    }

    
    dormir() {
        console.log(`O ${this.nome} da espécie ${this.especie} está dormindo.`);
    }

    // Método para obter a espécie
    getEspecie(): string {
        return this.especie;
    }
}

// Subclasse Cachorro
class Cachorro extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, "Cachorro");
    }

   
    latir() {
        console.log(`O ${this.nome} da espécie ${this.especie} está latindo: Au Au!`);
    }
}

// Subclasse Cavalo
class Cavalo extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, "Cavalo"); 
    }

    
    galopar() {
        console.log(`O ${this.nome} da espécie ${this.especie} está galopando!`);
    }
}

// Subclasse Gato
class Gato extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, "Gato"); 
    }

   
    miar() {
        console.log(`O ${this.nome} da espécie ${this.especie} está miando: Miau!`);
    }
}

// ***************  Testando as classes  *********************

const cachorro = new Cachorro("Rex", 5);
cachorro.comer();
cachorro.dormir();
cachorro.latir();  
const cavalo = new Cavalo("Trovão", 7);
cavalo.comer();
cavalo.dormir();
cavalo.galopar();  

const gato = new Gato("Mingau", 3);
gato.comer();
gato.dormir();
gato.miar();  
