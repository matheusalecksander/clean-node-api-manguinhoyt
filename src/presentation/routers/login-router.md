Arquivo onde irei documentar meu entendimento sobre o código produzido!

## Class LoginRouter

#### Qual a principal função da classe?

  * Classe responsável por lidar com a rota de login, irá tratar a request e retornar a response esperada pelo usuário

#### Como ela executa a sua função?

  * Em sua função route(), recebe uma httpRequest, desestrutura o seu
  body da requisição, valida se recebemos o email e a senha na requisição,
  valida se o email enviado pelo usuário está em um formato correto e então
  envia esses dados para a classe AuthUseCase que irá lidar com esses dados
  e retornar um token de acesso para que o usuário possa acessar o sistema.

#### Quais as dependencias da classe? E como ela recebe essas dependencias?

  * A classe recebe por meio da injeção de dependencias, em seu método
  construtor, as seguintes dependencias:
    
    * authUseCase -> Classe responsável por realizar a autenticação do usuário -> domain layer

    * emailValidator -> Classe responsável por realizar a verificação do
    e-mail que está sendo recebido pelo usuário -> helpers

#### Qual o fluxo de trabalho da classe?

  1. Em seu método route(), recebe a request do cliente

  2. Desestrutura o body dessa request e atribui as variáveis

  3. Checa se recebemos um e-mail no body, se não lança um erro

  4. Checa se o e-mail está no formato correto

  5. Checa se recebemos um password no body, se não lança um erro

  6. Passa os dados do body para a classe de autenticação e aguarda o token de acesso

  7. Verifica se recebemos um token, se não lança um erro

  8. Retorna o token para o client e libera o acesso ao sistema.
