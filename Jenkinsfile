pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'nikitakhs:nicita.xoxlov.65'
        JENKINS_URL = '212.233.97.208:8080'
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
