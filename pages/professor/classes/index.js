import ClassCard from '../../../components/ClassCard'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

import { database } from '../../../utils/initFirebaseDB'
import { collection, getDocs } from 'firebase/firestore'

function Classes({ classes }) {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.maincard}>
        <h2>Turmas</h2>
        <div className={styles.containerclasses}>
          {classes.map(c => (
            <Link href={`/professor/classes/${c.id_class}`} key={c.id_class}>
              <a>
                <ClassCard title={c.name} year={c.year} semester={c.semester} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const dbInstance = collection(database, 'classes')

  let classes = []
  await getDocs(dbInstance)
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        classes.push({ ...doc.data() })
      })
    })
    .catch(error => {
      console.log('Error getting classes:', error)
    })
  return { props: { classes } }
}

export default Classes
