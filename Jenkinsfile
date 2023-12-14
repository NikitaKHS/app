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
        script {
            docker.image("testlatest:latest").inside {
                // Переходим в рабочую директорию приложения
                dir('/usr/src/app') {
                    sh 'npm install'
                    sh 'node app.js'
                }
            }
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
