@Grab(group='org.codehaus.groovy', module='groovy-json', version='3.0.9')

pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'nikitakhs:nicita.xoxlov.65'
        JENKINS_URL = '212.233.97.208:8080'
        JENKINS_USER = 'nikitakhs'
        JENKINS_PASSWORD = 'Nicita65'
    }

    stages {
        stage('Get Crumb') {
            steps {
                script {
                    def response = sh(script: "curl -s -X GET http://${JENKINS_URL}/crumbIssuer/api/json --user ${JENKINS_USER}:${JENKINS_PASSWORD}", returnStdout: true).trim()

                    // Обработка JSON-ответа
                    def json = new groovy.json.JsonSlurperClassic().parseText(response)
                    env.CRUMB = json.crumb
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
                    // Ваш код для сборки Docker-образа
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

        // Добавим другие этапы вашего скрипта...

    }
}
