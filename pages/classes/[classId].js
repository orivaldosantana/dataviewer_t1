import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

function ClassDetails({ items }) {
  const router = useRouter()
  const classId = router.query.classId
  return (
    <div className={styles.maincontainer}>
      <div className={styles.maincard}>
        <h2>Turma</h2>

        <p> {classId} </p>
      </div>
      <div className={styles.maincard}>oi</div>
    </div>
  )
}

export default ClassDetails
