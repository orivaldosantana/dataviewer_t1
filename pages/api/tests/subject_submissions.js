export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'Aritméticos',
      acertos: '140',
      erros: '120',
      restantes: '110'
    },
    {
      name: 'Se',
      acertos: '163',
      erros: '160',
      restantes: '90'
    },
    {
      name: 'Enquanto',
      acertos: '83',
      erros: '170',
      restantes: '100'
    },
    {
      name: 'For',
      acertos: '60',
      erros: '100',
      restantes: '140'
    }
  ])
}
