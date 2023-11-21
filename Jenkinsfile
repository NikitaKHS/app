pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-docker-image-name:latest'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Ваш код сборки Docker-образа
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Deploy Locally') {
            steps {
                script {
                    // Развертывание Docker-образа локально
                    sh "docker run -d -p 8081:8080 ${DOCKER_IMAGE}"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
