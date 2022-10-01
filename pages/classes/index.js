import ClassCard from '../../components/ClassCard'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import axios from 'axios'

function Classes({ items }) {
  console.log(items)
  return (
    <div className={styles.maincard}>
      <h2>Turmas</h2>
      <div className={styles.containerclasses}>
        {items.map(c => (
          <Link href={`/classes/${c.id_class}`} key={c.id_class}>
            <a>
              <ClassCard title={c.name} year={c.year} semester={c.semester} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.API_URL}/api/tests/db_classes`
  )
  const items = await response.data
  return { props: { items } }
}

export default Classes
