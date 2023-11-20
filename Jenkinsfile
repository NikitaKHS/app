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

        stage('Deploy Locally') {
                    steps {
                        script {
                            // Развертывание Docker-образа локально
                            sh "docker run -d -p 8080:8080 ${DOCKER_IMAGE}"
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
