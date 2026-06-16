# Teste técnico - Convergência

Este projeto foi desenvolvido no teste técnico para a vaga de Engenheiro de Software Sênior.

## BACKEND
O backend foi um desafio bem complexo para mim, pois depois de muito tempo sem atuar com java eu fiquei travado no início em como configurar todo o ambiente para subir uma api em java, o docker facilitou bastante esta tarefa.
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
Infelizmente não consegui finalizar o desafio técnico a tempo, pois perdi muito tempo para implementar o backend e para entender a documentação da api de países utilizada na avaliação. Acredito que mais um pouco e eu conseguiria sair do outro lado haha.