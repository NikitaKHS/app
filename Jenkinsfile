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
                        script {
                            docker.image("nikitakhs/app").build()
                        }

                        // Тегирование Docker-образа
                        docker.image("nikitakhs/app").tag("latest")

                        // Отправка Docker-образа в Docker Hub
                        docker.image("nikitakhs/app").push()
                    }
                }
            }
        }
        stage('Deploy to Remote Server') {
            steps {
                script {
                    // Используем 1 вместо your-ssh-credentials
                    sshagent(['1']) {
                        sh 'ssh -o StrictHostKeyChecking=no nikita@84.201.134.218 "docker-compose -f docker-compose.yml up -d"'
                    }
                }
            }
        }
    }
}
