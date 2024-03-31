# A detailed Guide to Deploy NodeJS Express API as AWS Lambda Function

The purpose of this repository is to demonstrate how to deploy a simple full-stack application built by Node.js Express framework on AWS Lambda with the use of Amplify

### Requirements
  - `Node.js with Node Package Manager(npm)` should be installed on your system.

### Steps for the Local Setup
    - npm install
    - amplify init
    Note: It is recommended to run this command from the root of your app directory
    ? Enter a name for the environment dev
    ? Choose your default editor: (Use arrow keys)
    > Visual Studio Code
    Android Studio
    ? Choose your default editor: Visual Studio Code
    Using default provider  awscloudformation
    ? Select the authentication method you want to use: AWS access keys
    accessKeyId: <enter Access key ID of IAM user created with amplify access>
    secretAccessKey: <enter Secret access key of IAM user created with amplify access>
    region:  ap-south-1 
    "amplify status" will show you what you've added already and if it's locally configured or deployed
    "amplify add <category>" will allow you to add features like user login or a backend API
    "amplify push" will build all your local backend resources and provision it in the cloud
    "amplify console" to open the Amplify Console and view your project status
    "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

### Deploy to AWS Lambda using AWS Amplify
    - amplify push

### Run the app (dev mode)
    - npm run dev

