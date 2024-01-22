pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    IMAGE_NAME = 'sathiya/react'
    IMAGE_TAG = 'latest'
  }
  stages {
    stage('Build'){
      steps {
        sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
      }
    }
  }
}
