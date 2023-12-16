pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    docker.build('your-image-name:latest')
                    docker.withRegistry('https://your-docker-registry', 'docker-registry-credentials') {
                        docker.image('your-image-name:latest').push()
                    }
                }
            }
        }
    }
}
