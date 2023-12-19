pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'nikita:nicita.xoxlov.65'
        JENKINS_URL = '212.233.97.208:8080'
    }

    stages {
        stage('Get Crumb') {
            steps {
                script {
                    // Получение Jenkins crumb для обеспечения безопасности запросов
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
                    // Выполнение checkout из репозитория
                    checkout scm
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Сборка Docker-образа
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

                    // Пуш Docker-образа на Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB_CREDENTIALS') {
                        docker.image("nikitakhs/app:latest").push()
                    }
                }
            }
        }
    }
}
