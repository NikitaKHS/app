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
                    docker.build("testlatest:latest")
                }
            }
        }

        stage('Deploy to Docker') {
    steps {
        // Развертывание Docker-контейнера
        script {
            docker.image("testlatest:latest").inside('--user=root') {
                sh 'npm install' // Установка зависимостей внутри контейнера
                sh 'node app.js'
            }
        }
    }
}


        stage('Test') {
            steps {
                // Ваши шаги для тестирования приложения, например, npm test
                script {
                    sh 'npm install' // Убедитесь, что устанавливаются зависимости
                    sh 'npm test'
                }
            }
        }
    }
}
