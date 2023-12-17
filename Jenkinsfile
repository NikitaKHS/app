pipeline {
    agent any

    stages {
        stage('Get Crumb') {
            steps {
                script {
                    // Получаем CSRF-токен (crumb) и сохраняем его в переменной окружения
                    def crumb = sh(script: 'curl -s "http://84.201.134.218:8080/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)"', returnStdout: true).trim()
                    env.CRUMB = crumb
                }
            }
        }

        stage('Print Crumb') {
            steps {
                script {
                    // Выводим значение CSRF-токена (crumb) для проверки
                    echo "CRUMB: ${env.CRUMB}"
                }
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    // Используем CSRF-токен (crumb) в запросах Docker
                    def customHeaders = [[
                        $class: 'StringParameterValue',
                        name: 'Jenkins-Crumb',
                        value: "${env.CRUMB}"
                    ]]
                    
                    // Ваши шаги по сборке и отправке образа в Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB_CREDENTIALS') {
                        app.build()
                        app.push()
                    }
                }
            }
        }
    }
}
