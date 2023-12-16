pipeline {
    agent any
    environment {
        registryCredential = 'nikitakhs' // Используйте ваш логин Docker Hub
        sshCredential = '1' // Используйте ваш идентификатор учетных данных SSH
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
                    def customImage = docker.build("nikitakhs/app")
                    docker.withRegistry('https://registry.hub.docker.com', 'nikitakhs') {
                        customImage.push()
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
