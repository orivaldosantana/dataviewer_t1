import styles from '../styles/Components.module.css'

function ClassCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.title}> {props.title} </div>
      <div className={styles.content}>
        <p> Ano: {props.year} </p>
        <p> Semestre: {props.semester} </p>
      </div>
    </div>
  )
}

export default ClassCard
