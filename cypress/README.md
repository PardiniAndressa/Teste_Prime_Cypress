# Documentação do Teste Automatizado - Cadastro em Site

## Introdução

Este documento descreve um conjunto de testes automatizados desenvolvidos para verificar a funcionalidade de cadastro em um site. Os testes foram implementados usando o framework Cypress e visam garantir que o formulário de cadastro funcione corretamente, incluindo o cadastro bem-sucedido e a validação de campo obrigatório não preenchido.

## Pré-requisitos

Certifique-se de ter o seguinte software instalado antes de executar os testes:

- [Node.js](https://nodejs.org)
- [Cypress](https://www.cypress.io)

## Instruções de Execução

1. Clone este repositório em seu ambiente de desenvolvimento local.
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `npm install` para instalar as dependências do projeto.
4. Execute o comando `npx cypress open` para abrir a interface do Cypress.
5. Selecione o arquivo de teste `cadastro.spec.js` na interface do Cypress para executar os testes automatizados.

## Cenários de Teste

### Cadastro 01 - Validar Cadastro Bem-sucedido

1. O teste visita a URL da página de demonstração.
2. Preenche os campos do formulário com informações válidas.
3. Calcula a soma dos números na tela e preenche o campo "Result ?".
4. Clica no botão de envio.
5. Verifica se a mensagem de cadastro realizado com sucesso é exibida.

### Cadastro 02 - Validação de Campo Obrigatório Não Preenchido

1. O teste visita a URL da página de demonstração.
2. Preenche os campos do formulário, exceto o e-mail.
3. Calcula a soma dos números na tela e preenche o campo "Result ?".
4. Clica no botão de envio.
5. Verifica se a mensagem de erro esperada está presente.

---

**Este teste foi criado para a empresa Prime Control como parte do processo seletivo para a vaga de testes automatizados.**

---

Caso queira contribuir com melhorias ou correções, sinta-se à vontade para fazer um fork deste repositório e enviar um pull request.
