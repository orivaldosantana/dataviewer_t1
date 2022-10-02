export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'Muito Fácil',
      acertos: '263',
      erros: '260',
      restantes: '190'
    },
    {
      name: 'Fácil',
      acertos: '140',
      erros: '120',
      restantes: '110'
    },

    {
      name: 'Médio',
      acertos: '83',
      erros: '170',
      restantes: '100'
    },
    {
      name: 'Difícil',
      acertos: '60',
      erros: '100',
      restantes: '140'
    },
    {
      name: 'Muito Difícil',
      acertos: '60',
      erros: '400',
      restantes: '240'
    }
  ])
}
