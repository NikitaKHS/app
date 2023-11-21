pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-docker-image-name:latest'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Ваш код сборки Docker-образа
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Create ASCII Art File') {
            steps {
                script {
                    // Создание файла с ASCII-арт собачкой
                    echo " / \\__" > /path/to/your/project/dog.txt
                    echo "(    @\\___" >> /path/to/your/project/dog.txt
                    echo " /         O" >> /path/to/your/project/dog.txt
                    echo "/   (_____ /" >> /path/to/your/project/dog.txt
                    echo "/_____/   U" >> /path/to/your/project/dog.txt
                }
            }
        }

        stage('Create Express App File') {
            steps {
                script {
                    // Создание файла с вашим кодом Express приложения
                    echo """
                    const express = require('express');
                    const app = express();

                    app.get('/', (req, res) => {
                        const dogArt = '
                          / \\__
                         (    @\\\\___
                         /         O
                        /   (_____ /
                        /_____/   U
                        ';

                        res.send('<pre>' + dogArt + '</pre><p>Это собачка</p>');
                    });

                    const port = process.env.PORT || 8081;
                    app.listen(port, () => {
                        console.log('Сервер запущен на порту ' + port);
                    });
                    """ > /path/to/your/project/app.js
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
