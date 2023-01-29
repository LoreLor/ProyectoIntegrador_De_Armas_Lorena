#
# Build stage
#
FROM maven:3.6.2 AS build
COPY . .
RUN mvn clean package -DskipTests

#
# Package stage
#
FROM amazoncorretto:11-alpine-jdk 

COPY target/crud-0.0.1-SNAPSHOT.jar   portfolio-crud.jar

ENTRYPOINT ["java","-jar","/portfolio-crud.jar"]
