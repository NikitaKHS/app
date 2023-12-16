pipeline {
    agent any
    environment {
        registryCredential = 'nikitakhs'
        sshCredential = 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDNYTOJ8top6J/Ni2/BXP47qx2yR39+DQgC38h96gMpk0KhpHjevPxAjFjQzMh2J/h2QQRaF3GvLMsh/5FOC+ZdFy9qyoXMF44K2sxGn9bgQc6KbjRzzAAUAq/YjxNtp5exCne86sF7OycHCY8AzqyNbC9lkJYbJ07ebdyF6Noht5oHya5t5XXUzkF3elqVklz5aPB3CWObMwMrfMpBGKgzzryRiFhv5rzV0J39UB8oqUV9zN0aYqi1MU+2igj/VIsksIME/BlT+v4bTcKzf/adm+SuPXDnkLXP9AEp8R0nRltoJw8ZQfrsvY9iymkjvk79NRAbW6s3dr6q/lCjdkFj askkh@Qvim'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build and Push Docker Image') {
            steps {
                script {
                    docker.build("nikitakhs/app")
                    docker.withRegistry('https://registry.hub.docker.com', 'nikitakhs') {
                        docker.image("nikitakhs/app").push()
                    }
                }
            }
        }
        stage('Deploy to Remote Server') {
            steps {
                script {
                    sshagent(['your-ssh-credentials']) {
                        sh 'ssh -o StrictHostKeyChecking=no nikita@84.201.134.218 "docker-compose up -d"'
                    }
                }
            }
        }
    }
}
