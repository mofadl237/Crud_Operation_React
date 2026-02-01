pipeline{
    agent {
        label 'aws-ec2'
    } 
    stages{
        stage('build'){
            steps{
                sh """
                echo "Stages Build"
                """
            }
        }

         stage('Test'){
            steps{
                sh """
                echo "Stages Test"
                """
            }
        }

    }
}