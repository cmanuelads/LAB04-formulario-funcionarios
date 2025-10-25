// Variável principal para armazenar os funcionários (Exercício 1)
const listaFuncionarios = [];

// Seletores do DOM
const form = document.getElementById('funcionario-form');
const corpoTabela = document.getElementById('funcionarios-corpo');
const btnCadastrar = document.getElementById('btn-cadastrar');
const inputId = document.getElementById('funcionario-id');
const btnCancelar = document.getElementById('btn-cancelar');
const resultadoRelatorio = document.getElementById('relatorio-resultado');


// -------------------------------------------------------------
// FUNÇÕES BASE DO CRUD (Exercícios 1, 2 e 3)
// -------------------------------------------------------------

// Função de Listagem (Exercício 1)
function listarFuncionarios(lista = listaFuncionarios) {
    corpoTabela.innerHTML = '';
    
    lista.forEach(funcionario => {
        const linha = corpoTabela.insertRow();
        
        linha.insertCell().textContent = funcionario.id;
        linha.insertCell().textContent = funcionario.nome;
        linha.insertCell().textContent = funcionario.idade;
        linha.insertCell().textContent = funcionario.cargo;
        linha.insertCell().textContent = `R$ ${funcionario.salario.toFixed(2)}`;

        // Célula de Ações (Exercício 2)
        const celulaAcoes = linha.insertCell();
        
        // Botão Editar (Usa Função Anônima no evento - Ex. 3)
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => carregarParaEdicao(funcionario.id); 

        // Botão Excluir (Usa Função Anônima no evento - Ex. 3)
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir'; 
        btnExcluir.onclick = () => excluirFuncionario(funcionario.id); 
        
        celulaAcoes.appendChild(btnEditar);
        celulaAcoes.appendChild(btnExcluir);
    });
}

// Busca (Arrow Function / Lambda - Ex. 3)
const buscarFuncionario = (id) => listaFuncionarios.find(f => f.id === id); 

// Exclusão (Arrow Function / Lambda - Ex. 3)
const excluirFuncionario = (id) => { 
    const indice = listaFuncionarios.findIndex(f => f.id === id);
    if (indice !== -1) {
        listaFuncionarios.splice(indice, 1); 
        listarFuncionarios(); 
    }
};

// Carrega para Edição (Exercício 2)
function carregarParaEdicao(id) { 
    const funcionario = buscarFuncionario(id);
    if (funcionario) {
        document.getElementById('nome').value = funcionario.nome;
        document.getElementById('idade').value = funcionario.idade;
        document.getElementById('cargo').value = funcionario.cargo;
        document.getElementById('salario').value = funcionario.salario;
        inputId.value = funcionario.id; 
        
        btnCadastrar.textContent = 'Salvar Edição';
        btnCancelar.style.display = 'inline-block';
        document.getElementById('formulario-container').scrollIntoView({ behavior: 'smooth' });
    }
}

// Atualização (Arrow Function / Lambda - Ex. 3)
const atualizarFuncionario = (id, nome, idade, cargo, salario) => { 
    const funcionario = buscarFuncionario(id);
    if (funcionario) {
        funcionario.atualizarAtributos(nome, idade, cargo, salario); 
        listarFuncionarios();
        
        // Reset da interface
        form.reset();
        inputId.value = '';
        btnCadastrar.textContent = 'Cadastrar';
        btnCancelar.style.display = 'none';
    }
};

// Evento Submit do Formulário (Arrow Function / Lambda - Ex. 3)
form.addEventListener('submit', (event) => { 
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const cargo = document.getElementById('cargo').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const id = inputId.value;

    if (id) {
        atualizarFuncionario(parseInt(id), nome, idade, cargo, salario);
    } else {
        const novoFuncionario = new Funcionario(nome, idade, cargo, salario);
        listaFuncionarios.push(novoFuncionario);
        
        listarFuncionarios(); 
        form.reset(); 
    }
});

// Evento Cancelar Edição (Exercício 2)
btnCancelar.addEventListener('click', function() {
    form.reset();
    inputId.value = '';
    btnCadastrar.textContent = 'Cadastrar';
    this.style.display = 'none';
});


// -------------------------------------------------------------
// RELATÓRIOS (Exercício 4: map, filter, reduce)
// -------------------------------------------------------------

// 1. Salário > R$ 5000 (Usa filter)
document.getElementById('relatorio-salario').addEventListener('click', () => {
    const altosSalarios = listaFuncionarios.filter(f => f.salario > 5000); 
    
    let html = '<h3>Funcionários com Salário > R$ 5000:</h3>';
    if (altosSalarios.length > 0) {
        html += '<ul>';
        altosSalarios.forEach(f => html += `<li>${f.nome} - R$ ${f.salario.toFixed(2)}</li>`);
        html += '</ul>';
    } else {
        html += '<p>Nenhum funcionário encontrado.</p>';
    }
    resultadoRelatorio.innerHTML = html;
});

// 2. Média Salarial (Usa reduce)
document.getElementById('relatorio-media').addEventListener('click', () => {
    if (listaFuncionarios.length === 0) {
        resultadoRelatorio.innerHTML = '<p>Não há funcionários para calcular a média.</p>';
        return;
    }

    const somaSalarios = listaFuncionarios.reduce((total, f) => total + f.salario, 0);
    const mediaSalarial = somaSalarios / listaFuncionarios.length; 

    resultadoRelatorio.innerHTML = `<h3>Média Salarial:</h3><p>R$ ${mediaSalarial.toFixed(2)}</p>`;
});

// 3. Cargos Únicos (Usa map e Set)
document.getElementById('relatorio-cargos').addEventListener('click', () => {
    const cargos = listaFuncionarios.map(f => f.cargo);
    const cargosUnicos = [...new Set(cargos)]; 

    let html = '<h3>Cargos Únicos:</h3>';
    html += '<ul>';
    cargosUnicos.forEach(cargo => html += `<li>${cargo}</li>`);
    html += '</ul>';
    resultadoRelatorio.innerHTML = html;
});

// 4. Nomes em Maiúsculo (Usa map)
document.getElementById('relatorio-maiusculo').addEventListener('click', () => {
    const nomesEmMaiusculo = listaFuncionarios.map(f => f.nome.toUpperCase()); 

    let html = '<h3>Nomes em Maiúsculo:</h3>';
    html += '<ul>';
    nomesEmMaiusculo.forEach(nome => html += `<li>${nome}</li>`);
    html += '</ul>';
    resultadoRelatorio.innerHTML = html;
});


// Chamada Inicial
listarFuncionarios();