pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Получение кода из репозитория
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                // Сборка Docker-образа
                script {
                    docker.build("testlatest:latest")
                }
            }
        }

stage('Deploy to Docker') {
    steps {
        script {
            echo '--- Starting npm install ---'
            docker.image("testlatest:latest").inside {
                dir('/usr/src/app') {
                    echo '--- Inside the app directory ---'
                    sh 'ls -la'  // Проверим содержимое текущей директории
                    sh 'npm install'
                    sh 'node app.js'
                }
            }
            echo '--- Finished npm install ---'
        }
    }
}

        stage('Test') {
            steps {
                // Ваши шаги для тестирования приложения, например, npm test
                script {
                    sh 'npm test'
                }
            }
        }
    }
}
