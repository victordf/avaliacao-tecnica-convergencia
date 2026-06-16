# Teste técnico - Convergência

Este projeto foi desenvolvido no teste técnico para a vaga de Engenheiro de Software Sênior.

## BACKEND
O backend do projeto foi desenvolvido utilizando java e docker. Para executar basta buildar a imagem a partir do Dockerfile, com o comando:
```
docker build -t api-java .
```

E depois executar a api com o comando:
```
docker run -p 8089:8080 --name api-java api-java
```

Este comando irá expor a API no host http://localhost:8089

A rota implementada foi a "/api/paises"

## FRONTEND
O front utiliza a versão mais nova do angular e também utiliza docker para executar o projeto, porém como eu utilizei um projeto já existente no meu servidor o docker-compose.yml está na raiz do projeto. Para executar basta rodar o comando na raiz do projeto:

```
docker compose up
```

## Resultado
Infelizmente não consegui implementar todo o desafio técnico, pois perdi muito tempo para implementar o backend e para entender a documentação da api utilizada na avaliação.