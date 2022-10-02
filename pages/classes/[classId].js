import styles from '../../styles/Home.module.css'
import axios from 'axios'

import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'

const ClassSubjectChart = dynamic(
  () => import('../../components/ClassSubjectChart'),
  { ssr: false }
)

function ClassDetails({ subjects, difficulties }) {
  const router = useRouter()
  const classId = router.query.classId
  return (
    <div className={styles.maincontainer}>
      <div className={styles.maincard}>
        <h2>Turma</h2>

        <p> {classId} </p>
      </div>
      <div className={styles.containercharts}>
        <div className={styles.secondarycard}>
          <h3> Gráfico de Desempenho por Assuntos </h3>
          <ClassSubjectChart data={subjects} width={430} />
        </div>
        <div className={styles.secondarycard}>
          <h3> Gráfico de Desempenho por Dificuldade </h3>
          <ClassSubjectChart data={difficulties} width={500} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context
  console.log(params.classId) // Adicionar a busca da turma por id
  const response = await axios.get(
    `${process.env.API_URL}/api/tests/subject_submissions`
  )
  const data1 = await response.data

  const response2 = await axios.get(
    `${process.env.API_URL}/api/tests/difficulty_subs`
  )
  const data2 = await response2.data

  return { props: { subjects: data1, difficulties: data2 } }
}

export default ClassDetails
