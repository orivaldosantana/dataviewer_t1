import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfigurattion = {
  apiKey: 'AIzaSyAHD1T5KPOZgEFlye4mxS5qN2Goo9foDP4',
  authDomain: 'dataviewer-dev-cb866.firebaseapp.com',
  projectId: 'dataviewer-dev-cb866',
  storageBucket: 'dataviewer-dev-cb866.appspot.com',
  messagingSenderId: '897416031405',
  appId: '1:897416031405:web:4eff21823575a15ba02a24',
  measurementId: 'G-B2X2F663DW'
}

const app = initializeApp(firebaseConfigurattion)

export const auth = getAuth(app)
export default app
