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
            echo '--- Starting Deploy to Docker ---'
            docker.image("testlatest:latest").inside {
                echo '--- Inside the Docker container ---'
                sh 'pwd'
                sh 'ls -la /usr/src/app'  // Проверим содержимое /usr/src/app
                sh 'npm install'
                sh 'node app.js'
            }
            echo '--- Finished Deploy to Docker ---'
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
