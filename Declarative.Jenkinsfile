// Declarative  On Agent 

pipeline{
    stages{
        stage('build project'){
            steps{
                script{
                    echo "Step One build project"
                }
            }
        }
         stage('run project'){
            steps{
                script{
                    echo "Step Two run project"
                }
            }
        }
         stage('build & Push Image'){
            steps{
                script{
                    echo "Step Three build & Push Image"
                }
            }
        }

         stage('Slack Integration'){
            steps{
                script{
                    echo "Step Four Slack Integration"
                }
            }
        }

    }
}