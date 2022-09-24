import styles from '../styles/Home.module.css'
import axios from 'axios'

function Classes({ items }) {
  console.log(items)
  return (
    <div className={styles.maincard}>
      <h2>Turmas</h2>
      {items.map(c => (
        <div key={c.id_class}> {c.name} </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/tests/classes')
  const items = await response.data
  return { props: { items } }
}

export default Classes
