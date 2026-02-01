## PipeLine in Jenkines

pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/mofadl237/Crud_Operation_React.git'
            }
        }

        stage('CI') {
            steps {
                sh '''
                  docker build -f DockerFile -t mfadl237/jenkines-project:1 .
                  docker login <permessions>
                  docker push mfadl237/jenkines-project:1
                '''
            }
        }

        stage('CD') {
            steps {
                sh '''
                  docker run -d -p 3000:3000 mfadl237/jenkines-project:1
                '''
            }
        }
    }
}


### expose Port 3000