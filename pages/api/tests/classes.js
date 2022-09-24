export default function handler(req, res) {
  res.status(200).json([
    {
      id_class: '59dfe476-1325-433f-b676-c8df9a2c2072',
      name: 'LoP 04 - 2020.1',
      year: '2020',
      semester: '1',
      description: 'ECT2203 Lógica de Programação - Turma 04'
    },
    {
      id_class: '6d04019e-905c-4d70-810a-a7f1fa34fe22',
      name: 'LoP Turma 04 2020.2',
      year: '2021',
      semester: '1',
      description: 'LoP Turma 04 2020.2'
    }
  ])
}
