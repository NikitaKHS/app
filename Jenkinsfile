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
                    // Устанавливаем права для директории кеша npm
                    sh 'mkdir -p /usr/src/app/.npm/_locks'
                    sh 'chmod -R 777 /usr/src/app/.npm'

                    // Устанавливаем глобальный кеш npm внутри директории проекта
                    sh 'npm config set cache /usr/src/app/.npm --global'

                    // Устанавливаем директорию для глобальных модулей npm
                    sh 'npm config set prefix /usr/src/app/.npm-global'

                    // Устанавливаем зависимости и запускаем приложение
                    sh 'npm install'
                    sh 'node app.js'
                }
            }
        }
    }
}
