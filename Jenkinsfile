pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '--- Checking out the code ---'
                checkout scm
            }
        }

        stage('Build and Deploy to Docker') {
            steps {
                echo '--- Building and Deploying to Docker ---'
                script {
                    docker.image("node:14").inside {
                        sh 'pwd'
                        sh 'ls -la'

                        // Клонируем ваш репозиторий
                        sh 'git clone https://github.com/NikitaKHS/app.git'
                        
                        // Перемещаемся в директорию с клонированным кодом
                        dir('app') {
                            sh 'pwd'
                            sh 'ls -la'

                            // Создаем и изменяем права для директории кеша npm
                            sh 'mkdir -p $HOME/.npm/_locks'
                            sh 'chmod -R 777 $HOME/.npm'

                            // Устанавливаем зависимости и запускаем приложение
                            sh 'npm install'
                            sh 'node app.js'
                        }
                    }
                }
            }
        }
    }
}
