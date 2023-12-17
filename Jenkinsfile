pipeline {
    agent any
    environment {
        registryCredential = 'DOCKER_HUB_CREDENTIALS'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build and Push Docker Image') {
            steps {
                script {
                    // Авторизация в Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        // Сборка Docker-образа
                        docker.image("nikitakhs/app").build()
                        
                        // Отправка Docker-образа в Docker Hub
                        docker.image("nikitakhs/app").push()
                    }
                }
            }
        }
        stage('Deploy to Remote Server') {
            steps {
                // Добавьте шаги развертывания на удаленный сервер по необходимости
            }
        }
    }
}
