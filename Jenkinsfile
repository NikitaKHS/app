pipeline {
    agent any
    environment {
        registryCredential = 'nikitakhs' // Учетные данные Docker Hub
        sshCredential = '1' // Замените на ваш идентификатор учетных данных SSH
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
                    docker.build("nikitakhs/app")
                    docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        docker.image("nikitakhs/app").push()
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
