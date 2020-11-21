import * as admin from 'firebase-admin';

admin.initializeApp({
  credential:admin.credential.applicationDefault(),
  databaseURL:'https://pwe-vue-firebase.firebaseio.com'
})

export default admin;