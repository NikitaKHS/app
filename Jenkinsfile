pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Сборка Docker-образа
                    docker.build('Dockerfile')
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Запуск тестов в контейнере
                    docker.image('Dockerfile').inside {
                        sh 'test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Развертывание Docker-контейнера
                    docker.image('Dockerfile').withRun('-p 8080:8080') {
                        // Дополнительные команды развертывания
                    }
                }
            }
        }
    }
}
