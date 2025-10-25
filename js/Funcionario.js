// js/Funcionario.js

class Funcionario {
    // 1. Propriedade estática para gerar IDs únicos (incrementa a cada novo objeto)
    static proximoId = 1;

    // 2. Construtor da classe 
    constructor(nome, idade, cargo, salario) {
        this._id = Funcionario.proximoId++;
        this._nome = nome;
        this._idade = idade;
        this._cargo = cargo;
        this._salario = salario;
    }

    // 3. Métodos de Acesso (Getters) 
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get cargo() {
        return this._cargo;
    }
    get salario() {
        return this._salario;
    }

    // 4. Métodos de Acesso (Setters) - Essenciais para a Edição (Exercício 2) 
    set nome(novoNome) {
        if (novoNome) this._nome = novoNome;
    }
    set idade(novaIdade) {
        if (novaIdade > 0) this._idade = novaIdade;
    }
    set cargo(novoCargo) {
        if (novoCargo) this._cargo = novoCargo;
    }
    set salario(novoSalario) {
        if (novoSalario >= 0) this._salario = novoSalario;
    }

    // 5. Método toString() 
    toString() {
        return `ID: ${this._id}, Nome: ${this._nome}, Idade: ${this._idade}, Cargo: ${this._cargo}, Salário: R$ ${this._salario.toFixed(2)}`;
    }

    // 6. Método auxiliar para atualizar múltiplos atributos (Usado na Edição, Ex. 2) [cite: 25]
    atualizarAtributos(novoNome, novaIdade, novoCargo, novoSalario) {
        this.nome = novoNome;
        this.idade = novaIdade;
        this.cargo = novoCargo;
        this.salario = novoSalario;
    }
}