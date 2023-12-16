pipeline {
    agent any

    environment {
        DOCKER_REPO = 'your-docker-repo'
        DOCKER_IMAGE = "${DOCKER_REPO}/my-node-app"
        // Другие переменные окружения, если необходимо
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Шаги сборки приложения
                    // Например, npm install, npm build и т.д.
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Шаги сборки Docker-образа
                    sh "docker build -t ${DOCKER_IMAGE}:${env.BUILD_NUMBER} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Шаги пуша Docker-образа в ваш репозиторий
                    sh "docker push ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
                }
            }
        }

        // Другие необходимые этапы вашего пайплайна
    }
}
