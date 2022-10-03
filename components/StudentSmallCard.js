function StudentSmallCard({ name, progress }) {
  return (
    <div>
      <strong> {name} </strong>
      <p> Progresso: {progress}% </p>
    </div>
  )
}

export default StudentSmallCard
