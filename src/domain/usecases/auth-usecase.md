Arquivo onde irei documentar meu entendimento sobre o código produzido!

## Class AuthUseCase 

#### Qual a principal função da classe?

  * A principal função da classe é autenticar o usuário

#### Como ela executa a sua função?

  * Por meio do seu metódo auth a classe recebe o email e a senha do usuário, e suas dependencias realizam as validações e então
  autentica o usuário.

#### Quais as dependencias da classe? E como ela recebe essas dependencias?

  * A classe recebe por meio da injeção de dependencias, em seu método
  construtor, as seguintes dependencias:

    * loadUserByEmailRepository -> Classe responsável por buscar o usuário no banco de dados pelo seu email -> infra layer?

    * updateAccessTokenRepository -> Classe responsável por atualizar o token de acesso do usuário -> infra layer?

    * encrypter -> Classe responsável por comparar a senha recebida pelo usuário e a senha cadastrada no banco -> helper?
    
    * tokenGenerator -> Classe responsável por gerar um novo token de acesso para o usuário -> helper?

#### Qual o fluxo de trabalho da classe?

  1. Em seu método auth() a classe recebe o email e a senha do usuário

  2. Após receber esses dados, ela valida se eles foram realmente enviados
  pelo usuário, caso esteja faltando algum parâmetro, um erro customizado é lançado.
  
  3. Tudo ok com os parâmetros, hora de buscar o usuário no banco.

  4. Caso não exista um usuário no banco com os dados enviados, o método retorna null

  5. Compara a senha que foi enviada pelo client com a senha que está armazenada no banco

  6. Verifica se está tudo ok com o usuário e a senha e então gera um novo token de acesso

  7. Salva o novo token de acesso no banco de dados

  8. Retorna esse token para o cliente

***As informações marcadas com um '?' significam que ainda tenho dúvidas,
mas quando forem solucionadas serão atualizadas
