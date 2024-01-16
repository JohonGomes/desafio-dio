class heroe {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack() {
        let type;

        switch (this.tipo) {
            case "Mago":
                type = "magia";
                break;
            case "Guerreiro":
                type = "espada";
                break;
            case "Monge":
                type = "artes marciais";
                break;
            case "Ninja":
                type = "shuriken";
                break;
            }

        console.log(`O ${this.tipo} atacou usando ${type}`);
    }
}
const player = new heroe("Gojou Satoru", 28, "Ninja");

player.attack();  
