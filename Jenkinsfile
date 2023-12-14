pipeline {
    agent any

    environment {
        NPM_CONFIG_PREFIX = "/usr/src/app/.npm-global"
        NPM_CONFIG_CACHE = "/usr/src/app/.npm"
    }

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
                    // Создаем и изменяем права для директории кеша npm
                    sh 'mkdir -p $NPM_CONFIG_CACHE/_locks'
                    sh 'chmod -R 777 $NPM_CONFIG_CACHE'

                    // Устанавливаем глобальный кеш npm внутри директории проекта
                    sh 'npm config set cache $NPM_CONFIG_CACHE --global'

                    // Устанавливаем директорию для глобальных модулей npm
                    sh 'npm config set prefix $NPM_CONFIG_PREFIX --global'

                    // Устанавливаем зависимости и запускаем приложение
                    sh 'npm install'
                    sh 'node app.js'
                }
            }
        }
    }
}
