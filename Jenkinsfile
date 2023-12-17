pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("nikitakhs/app:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Включаем использование crumb в запросах
def customHeaders = [[
    $class: 'StringParameterValue',
    name: 'Jenkins-Crumb',
    value: "${env.CRUMB}"
]]

// Ваша команда Docker push
docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB_CREDENTIALS') {
    docker.image("nikitakhs/app:latest").push()
}

                }
            }
        }
    }
}
