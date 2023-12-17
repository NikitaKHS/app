pipeline {
    agent any
    environment {
        registryCredential = 'nikitakhs'
        sshCredential = '1'
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
            docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB_CREDENTIALS') {
                // Сборка Docker-образа
                docker.image("nikitakhs/app").build()
                
                // Отправка Docker-образа в Docker Hub
                docker.image("nikitakhs/app").push()
            }
        }
    }
}
                }
            }
        }
        stage('Deploy to Remote Server') {
            steps {
                script {
                    sshagent(['1']) {
                        sh 'ssh -o StrictHostKeyChecking=no nikita@84.201.134.218 "docker-compose -f docker-compose.yml up -d"'
                    }
                }
            }
        }
    }
}
