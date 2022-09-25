import { database } from '../../../utils/initFirebaseDB'
import { collection, getDocs } from 'firebase/firestore'

export default function handler(req, res) {
  const dbInstance = collection(database, 'classes')
  console.log('data:\n\n')
  let classes = []
  getDocs(dbInstance).then(snapshot => {
    snapshot.docs.forEach(doc => {
      classes.push({ ...doc.data() })
    })
    console.log(classes)
    res.status(200).json(classes)
  })
}
