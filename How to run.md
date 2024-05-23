<!-- CLIENT -->

1. run "npm install --legacy-peer-deps"
2. create .env file in client folder then add server url <!--- Make sure server is runing --->
   > REACT_APP_API_URL = http://localhost:5000/api
3. then run "npm start"

<!-- SERVER -->

1. create .env file in server folder

- ADD THIS IN .ENV
  > PORT = 5000,
  > NODE_ENV = development,
  > MONGO_URI = 'your mongodb database url'
  > FIREBASE_TYPE= 'service_account'
  > PROJECT_ID = 'your project id'
  > PRIVATE_KEY_ID = 'your private key id'
  > PRIVATE_KEY ='your private key'
  > CLIENT_EMAIL ='your email'
  > CLIENT_ID ='your client id'
  > CLIENT_X509_CERT_URL 'your project cert url'
  > FIREBASE_STORAGE_BUCKET ='your firebase backet name'

2. run "npm install --legacy-peer-deps"
3. run "npm run dev"

<!-- ****** any error contact us error@zpunet.com or frontendkonki@gmail.com -->
