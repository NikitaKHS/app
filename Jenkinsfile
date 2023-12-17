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
                    withCredentials([usernamePassword(credentialsId: registryCredential, usernameVariable: 'nikitakhs', passwordVariable: 'nicita.xoxlov.65')]) {
                        // Сборка Docker-образа
                        sh 'docker build -t nikitakhs/app .'

                        // Авторизация в Docker Hub (опционально, если вы не используете Jenkins Credentials Plugin)
                        sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'

                        // Тегирование Docker-образа
                        sh 'docker tag nikitakhs/app:latest nikitakhs/app:latest'

                        // Отправка Docker-образа в Docker Hub
                        sh 'docker push nikitakhs/app:latest'
                    }
                }
            }
        }
        stage('Deploy to Remote Server') {
            steps {
                script {
                    // Используем 1 вместо your-ssh-credentials
                    sshagent(['1']) {
                        sh 'ssh -o StrictHostKeyChecking=no nikita@84.201.134.218 "docker-compose -f docker-compose.yml up -d
