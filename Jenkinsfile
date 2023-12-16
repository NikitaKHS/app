pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Получение кода из репозитория
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Сборка Node.js приложения
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                // Сборка Docker-образа
                script {
                    sh 'docker build -t my-node-app:latest .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                // Отправка Docker-образа в Docker Hub (или другой реестр)
                script {
                    sh 'docker push my-node-app:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Развертывание Docker-контейнера (на вашем сервере, используя SSH, например)
                script {
                    // Добавьте здесь шаги для развертывания на вашем сервере
                }
            }
        }
    }

    post {
        always {
            // Очистка ресурсов, например, остановка и удаление контейнеров
            script {
                sh 'docker system prune -af'
            }
        }
    }
}
