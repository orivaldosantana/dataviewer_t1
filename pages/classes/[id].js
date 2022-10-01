import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

function ClassDetails({ items }) {
  const router = useRouter()
  const classId = router.query.id
  return (
    <div className={styles.maincard}>
      <h2>Turma</h2>

      <p> {classId} </p>
    </div>
  )
}

export default ClassDetails
