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
            echo " / \\__"
            echo "(    @\\___"
            echo " /         O"
            echo "/   (_____ /"
            echo "/_____/   U"
            sh 'echo " / \\__" > /path/to/your/project/dog.txt'
            sh 'echo "(    @\\___" >> /path/to/your/project/dog.txt'
            sh 'echo " /         O" >> /path/to/your/project/dog.txt'
            sh 'echo "/   (_____ /" >> /path/to/your/project/dog.txt'
            sh 'echo "/_____/   U" >> /path/to/your/project/dog.txt'
        }
    }
}

        stage('Deploy Locally') {
            steps {
                script {
                    // Развертывание Docker-образа локально
                    sh "docker run -d -p 8081:8080 ${DOCKER_IMAGE}"
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
