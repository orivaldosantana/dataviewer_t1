import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

function ClassSubjectChart({ data }) {
  console.log(data)
  return (
    <BarChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="acertos" fill="#8884d8" />
      <Bar dataKey="erros" fill="#a58" />
      <Bar dataKey="restantes" fill="#82ca9d" />
    </BarChart>
  )
}

export default ClassSubjectChart
