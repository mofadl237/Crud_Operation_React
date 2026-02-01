node{
    git branch:'main' , url:'https://github.com/mofadl237/Crud_Operation_React.git'
    stage('build'){
        sh "echo Hello Every One"
    }
    stage('test'){
        if(env.BRANCH_NAME == 'not'){
            sh "echo Not Found"
        }else{
            sh "echo Print Found This Any Branch"
        }
    }
}