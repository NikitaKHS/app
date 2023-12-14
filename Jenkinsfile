pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-docker-image-name:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                // Шаг для проверки кода из репозитория
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Шаг сборки Docker-образа
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Deploy Locally') {
            steps {
                script {
                    // Шаг развертывания Docker-образа локально
                    sh "docker run -d -p 8081:3000 ${DOCKER_IMAGE}"
                }
            }
        }
    }

    post {
        always {
            // Шаг, который выполняется всегда после завершения pipeline
            echo 'Pipeline finished'

            // Можно добавить дополнительные шаги, такие как очистка ресурсов, остановка контейнеров и т.д.
            sh "docker stop \$(docker ps -aq)"
            sh "docker rm \$(docker ps -aq)"
        }
    }
