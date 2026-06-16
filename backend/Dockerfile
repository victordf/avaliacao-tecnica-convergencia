# --- Estágio 1: Compilação (Build) ---
# Usamos uma imagem oficial do Maven com JDK 21 para compilar o código
FROM maven:3.9.6-eclipse-temurin-21 AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo de configuração de dependências
COPY pom.xml .

# Baixa as dependências do Maven (útil para cache do Docker)
RUN mvc_go_offline_fallback=true mvn dependency:go-offline -B

# Copia o código fonte do projeto
COPY src ./src

# Compila o projeto e gera o arquivo .jar executável, pulando os testes
RUN mvn package -DskipTests

# --- Estágio 2: Execução ---
# Usamos uma imagem leve apenas com o JRE (Java Runtime Environment) para rodar a aplicação
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copia apenas o JAR gerado no estágio anterior
COPY --from=builder /app/target/*.jar app.jar

# Expõe a porta padrão que o Spring Boot utiliza
EXPOSE 8080

# Define variáveis de ambiente para otimização da JVM
ENV JAVA_OPTS="-XX:+UseG1GC -XX:+UseStringDeduplication"

# Comando para iniciar a aplicação dentro do container
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]