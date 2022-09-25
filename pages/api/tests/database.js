import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export default function handler(req, res) {
  const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  }
  const app = initializeApp(clientCredentials)
  console.log('teste 2\n\n')

  const database = getFirestore(app)
  const dbInstance = collection(database, 'classes')
  console.log('data:\n\n')
  getDocs(dbInstance).then(snapshot => {
    let classes = []
    snapshot.docs.forEach(doc => {
      classes.push({ ...doc.data() })
    })
    console.log(classes)
  })
  res.status(200).json([
    {
      status: 'ok'
    }
  ])
}
