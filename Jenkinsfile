pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'nikita:nicita.xoxlov.65'
        JENKINS_URL = '212.233.97.208:8080'
        GIT_REPO_URL = 'https://github.com/NikitaKHS/app.git'
        SERVER_DEPLOY_DIR = '/home/debian/my-node-app'
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
                    def customHeaders = [[
                        $class: 'StringParameterValue',
                        name: 'Jenkins-Crumb',
                        value: "${env.CRUMB}"
                    ]]

                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB_CREDENTIALS') {
                        docker.image("nikitakhs/app:latest").push()
                    }
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                script {
                    // Переход в директорию развертывания и обновление приложения
                    sh "cd ${SERVER_DEPLOY_DIR} && git clone ${GIT_REPO_URL} && cd app && npm install && pm2 restart app.js"
                }
            }
        }
    }
}
