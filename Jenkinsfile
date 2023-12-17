pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('DOCKER_HUB_CREDENTIALS')
        JENKINS_URL = '84.201.134.218:8080'
    }

    stages {
        stage('Get Crumb') {
            steps {
                script {
                    def crumb = sh(script: "curl -s 'http://${JENKINS_URL}/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)'", returnStdout: true).trim()
                    env.CRUMB = crumb
                }
            }
        }

        stage('Print Crumb') {
            steps {
                script {
                    echo "CRUMB: ${env.CRUMB}"
                }
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', "${DOCKER_HUB_CREDENTIALS}") {
                        // Ваши шаги по сборке и отправке образа в Docker Hub
                        app = docker.build("nikitakhs/app:latest")
                        app.push()
                    }
                }
            }
        }
    }
}
