# Teste Shopper Othon

## Descrição
Uma aplicação completa (Backend, Frontend e Banco de Dados) de solicitação de viagens usando a API Routes do Google Maps desenvolvida em Node.js, usando Express e Knex no Backend, React.js no Frontend e MySQLQ, como parte do teste de admissão da Shopper.

## Tecnologias Utilizadas
- **Node.js**: Stack principal da aplicação.
- **Express**: Biblioteca para criação e gerenciamento de endpoints.
- **MySQL**: Banco de dados utilizado para persistência.
- **Knex**: Query Builder para interagir com o banco de dados de forma mais simples.
- **Jest**: Biblioteca para criação e execução de testes automatizados.
- **React**: Framework de criação de Frontend interativo.

## Funcionalidades
A API permite realizar as seguintes operações:
- **Solicitação de Viagem**: Feito através da inserção de origem e destino.
- **Confirmação da Viagem**: Através dos dados recebidos o usuário poderá prosseguir com a solicitação.
- **Visualização de Viagens**: Listar as viagens realizadas por um determinado usuário.


## OBSERVAÇÃO IMPORTANTE PARA O AVALIADOR:
* Não testar a API do Google Maps devidamente porque o Google Cloud não aceitou nenhum cartão de crédito ou débito que eu possuía no momento. Assim, criei um "try/catch" no arquivo 'rideCalculate.ts' para usar dados mockados de um JSON (arquivo 'responseSimulado.json') que simula o response da API Routes. 
* Infelizmente tive essa intercorrência, mas resolvi entregar a atividade mesmo assim pois ao menos vocês verão minha lógica e forma de programar.

## Instalação
Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/othonaf/Desafio-Shopper-Othon.git
   ```

2. Instale as dependências:

```bash
cd DESAFIO-SHOPPER-OTHON
npm install
```
3. Inicie o compose docker:
   
```bash
docker-compose up -d
```
4. Crie o banco e as tabelas (Se ainda não tiver):

* Arquivo _'init.sql'_.
  
5. Inicie o servidor:

```bash
npm run dev
```
A API Backend estará disponível em http://localhost:8080.
O Frontend estará disponível em http://localhost:80.

Exemplos de Uso
Aqui estão alguns exemplos de como interagir com os endpoints da API.

1. Busca de Viagens:

Endpoint: POST /ride/estimate
Exemplo de requisição (JSON):
```json
{
    "customer_id": "20240102",
    "origin": "Fortaleza, Ceará",
    "destination": "Camocim, Ceará"
}
```
2. Consulta de Usuários
Endpoint: GET /user

3. Atualização de Usuário
Endpoint: PUT /user/:id
Exemplo de requisição (JSON):
```json
{
  "name": "Othon Updated",
  "email": "othon_updated@exemplo.com",
  "age": 31,
  "active": false
}
```
