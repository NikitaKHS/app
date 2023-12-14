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

                // Создаем и изменяем права для директории кеша npm
                sh 'mkdir -p $HOME/.npm/_locks'
                sh 'chmod -R 777 $HOME/.npm'

                // Устанавливаем глобальный кеш npm
                sh 'npm config set cache $HOME/.npm --global'

                // Устанавливаем зависимости
                sh 'npm install'

                // Запускаем приложение
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
