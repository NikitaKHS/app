pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'nikita:nicita.xoxlov.65'
        JENKINS_URL = '212.233.97.208:8080'
        GIT_REPO_URL = 'https://github.com/NikitaKHS/app.git' 
        DOCKER_IMAGE_NAME = 'nikitakhs/app:latest'
        LOCAL_DEPLOY_PORT = '3030'
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
                    docker.build("${DOCKER_IMAGE_NAME}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    def customHeaders = [[
                        $class: 'StringParameterValue',
                        name: 'Jenkins-Crumb',
                        value: "${env.CRUMB}"
                    ]]

                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB_CREDENTIALS') {
                        docker.image("${DOCKER_IMAGE_NAME}").push()
                    }
                }
            }
        }

        stage('Run on serser') {
            steps {
                script {
                    // Запуск контейнера локально с использованием порта 3030
                    sh "docker run -d -p ${LOCAL_DEPLOY_PORT}:80 --app ${DOCKER_IMAGE_NAME}"
                }
            }
        }
    }
}
