import styles from '../../styles/Home.module.css'
import axios from 'axios'

import { useRouter } from 'next/router'
import ClassSubjectChart from '../../components/ClassSubjectChart'

function ClassDetails({ data }) {
  console.log(data)
  const router = useRouter()
  const classId = router.query.classId
  return (
    <div className={styles.maincontainer}>
      <div className={styles.maincard}>
        <h2>Turma</h2>

        <p> {classId} </p>
      </div>
      <div className={styles.maincard}>
        <ClassSubjectChart />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { classId: '59dfe476-1325-433f-b676-c8df9a2c2072' } }],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context
  console.log(params.classId) // Adicionar a busca da turma por id
  const response = await axios.get(
    `${process.env.API_URL}/api/tests/subject_submissions`
  )
  const data = await response.data
  return { props: { data } }
}

export default ClassDetails