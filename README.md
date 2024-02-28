# DOWNCHECK

## Gerenciador de Tarefas ✅📝

Este é um aplicativo simples de gerenciamento de tarefas implementado usando HTML, CSS e JavaScript. O aplicativo permite aos usuários adicionar tarefas, marcar tarefas como concluídas e excluir tarefas. A lista de tarefas é armazenada localmente usando a API localStorage do navegador, para que as tarefas persistam mesmo depois que o navegador for fechado e reaberto.

### Explicação do Código 🧩

#### Estrutura HTML 🌐

O arquivo HTML contém um elemento de formulário (`#tsk-form`) para adicionar tarefas, um campo de entrada (`#tsk-title`) para inserir títulos de tarefas e uma lista não ordenada (`#tsk-ul`) onde as tarefas serão exibidas.

#### Funções JavaScript 🖥️

1. **renderTaskOnHTML(tskTitle, done = false):**

   - Esta função renderiza uma tarefa no HTML. Ela cria um item de lista (`li`) contendo uma caixa de seleção para a conclusão da tarefa, um span para exibir o título da tarefa e um botão de exclusão. O parâmetro `done` determina se a tarefa está marcada como concluída ou não.

2. **window.onload:**

   - Este ouvinte de evento é acionado quando a janela foi totalmente carregada. Ele recupera as tarefas armazenadas no localStorage e as renderiza no HTML.

3. **tskForm.addEventListener("submit"):**
   - Este ouvinte de evento escuta a submissão do formulário. Quando o formulário é enviado, ele impede o comportamento padrão, verifica se o título da tarefa tem pelo menos 5 caracteres, adiciona a tarefa ao array `tasks`, salva as tarefas atualizadas no localStorage e renderiza a tarefa no HTML.

#### Gerenciamento de Tarefas 📋

- **Adicionando uma Tarefa:**
  - Os usuários podem adicionar uma nova tarefa inserindo um título de tarefa no campo de entrada e enviando o formulário.
- **Concluindo uma Tarefa:**
  - Os usuários podem marcar uma tarefa como concluída marcando a caixa de seleção ao lado do título da tarefa. Essa ação alterna o estilo de riscado no título da tarefa.
- **Excluindo uma Tarefa:**
  - Os usuários podem excluir uma tarefa clicando no botão "excluir" ao lado da tarefa. Essa ação remove a tarefa da lista de tarefas.

### Uso 🚀

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em um navegador da web.
3. Adicione tarefas usando o campo de entrada e o formulário.
4. Marque tarefas como concluídas marcando a caixa de seleção.
5. Exclua tarefas clicando no botão de exclusão.

### Observação ℹ️

- As tarefas são armazenadas localmente no localStorage do navegador. Limpar os dados do navegador pode remover as tarefas armazenadas.
- Este gerenciador de tarefas é uma implementação simples e pode ser estendido com recursos adicionais como prioridade de tarefa, datas de vencimento, etc.
