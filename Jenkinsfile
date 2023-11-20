pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-node-app:latest'
    }

    stages {
        // Этап 1: Получение исходного кода
        stage('Checkout') {
            steps {
                // Получение исходного кода из репозитория
                checkout scm
            }
        }

        // Этап 2: Установка зависимостей
        stage('Install Dependencies') {
            steps {
                script {
                    // Установка зависимостей (пример для Node.js)
                    sh 'npm install'
                }
            }
        }

        // Этап 3: Сборка Docker-образа
        stage('Build Docker Image') {
            steps {
                script {
                    // Сборка Docker-образа
                    docker.build(env.DOCKER_IMAGE)
                }
            }
        }

        // Этап 4: Развертывание на удаленном сервере
        stage('Deploy to Remote Server') {
            steps {
                script {
                    // Развертывание Docker-образа на удаленном сервере с использованием SSH
                    sshagent(['your-ssh-credentials']) {
                        sh "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJJ6oXNuA5QaaaQENIGWcwxg7sEOOYukKd6YVuQ8YNkE askkh@Qvim 'docker pull ${env.DOCKER_IMAGE} && docker run -d -p 8080:8080 ${env.DOCKER_IMAGE}'"
                    }
                }
            }
        }

        // Добавьте дополнительные этапы по вашему усмотрению

    }

    // Постобработка
    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
