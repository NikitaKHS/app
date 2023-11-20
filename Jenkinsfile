pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Сборка Docker-образа
                    docker.build('ваше_имя_образа')
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Запуск тестов в контейнере
                    docker.image('ваше_имя_образа').inside {
                        sh 'ваша_команда_для_тестирования'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Развертывание Docker-контейнера
                    docker.image('ваше_имя_образа').withRun('-p 8080:8080') {
                        // Дополнительные команды развертывания
                    }
                }
            }
        }
    }
}
