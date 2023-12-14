pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Получение кода из репозитория
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                // Сборка Docker-образа
                script {
                    docker.build("testLatest:latest")
                }
            }
        }

        stage('Deploy to Docker') {
            steps {
                // Развертывание Docker-контейнера
                script {
                    docker.image("testLatest:latest").withRun('-p 3000:3000')
                }
            }
        }

        stage('Test') {
            steps {
                // Ваши шаги для тестирования приложения, например, npm test
                script {
                    sh 'npm test'
                }
            }
        }
    }
}
