export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'Aritméticos',
      acertos: '93',
      erros: '50',
      restantes: '70'
    },
    {
      name: 'Se',
      acertos: '63',
      erros: '60',
      restantes: '90'
    },
    {
      name: 'Enquanto',
      acertos: '33',
      erros: '70',
      restantes: '100'
    },
    {
      name: 'For',
      acertos: '20',
      erros: '100',
      restantes: '120'
    }
  ])
}
