import admin from 'firebase-admin'
import serviceAccount from './fbServiceAccountKey.json'

admin.initializeApp({
  credential: admin.credential?.cert(serviceAccount),
  databaseURL:  'https://chat-7e3d4-default-rtdb.firebaseio.com'
});

export default admin
