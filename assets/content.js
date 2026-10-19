/* Conteúdo único da página. Alterar aqui, reflete em todo o lado. */
window.MASTER = {
  /* WhatsApp: número e mensagens num só sítio; todos os botões usam isto */
  wa: '351969290136',
  msg: {
    geral: 'Olá! Vim através do site e tenho interesse no Master de Microagulhamento Facial · MF Profissional, no Hotel Lezíria Parque, em Vila Franca de Xira. Gostaria de saber mais e garantir a minha participação.',
    turma: d => `Olá! Vim através do site e quero inscrever-me no Master de Microagulhamento Facial · MF Profissional, na turma do dia ${d} de novembro de 2026, no Hotel Lezíria Parque, em Vila Franca de Xira. Como posso fazer o pagamento?`
  },
  // TODO: preço · horário · materiais incluídos · certificado · condições de pagamento (aguardam confirmação da organização)

  /* programa: um dia completo; img são opcionais (se o ficheiro não existir, a figura não aparece) */
  prog: [
    { t: 'Fundamentos e anatomia da pele', d: 'Como atua o microagulhamento, camadas da pele, colagénio, envelhecimento e reparação cutânea.',
      img: [{ src: 'assets/manual-anatomia.webp', alt: 'Página do manual com a anatomia das camadas da pele' }] },
    { t: 'Avaliação facial personalizada', d: 'Anamnese, biótipo, fototipo, sensibilidade, alterações da pele e registo fotográfico.',
      img: [{ src: 'assets/manual-avaliacao.webp', alt: 'Página do manual dedicada à avaliação facial' }] },
    { t: 'Segurança e responsabilidade profissional', d: 'Indicações, contraindicações, critérios de adiamento, consentimento informado e limites de atuação.' },
    { t: 'Biossegurança e equipamento', d: 'Preparação do espaço e da cliente, higiene, cartuchos de utilização única, funcionamento do aparelho e seleção de produtos compatíveis.',
      img: [{ src: 'assets/manual-biosseguranca.webp', alt: 'Página do manual sobre biossegurança e preparação do espaço' }, { src: 'assets/manual-cartuchos.webp', alt: 'Página do manual com os cartuchos de utilização única' }] },
    { t: 'Demonstração prática facial', d: 'Avaliação da modelo, preparação, adaptação da abordagem por zonas, controlo do aparelho, observação da pele e finalização.',
      img: [{ src: 'assets/manual-pratica.webp', alt: 'Página do manual com a demonstração prática no rosto' }] },
    { t: 'Pós-cuidados e acompanhamento', d: 'Recuperação, cuidados domiciliários, fotoproteção, sinais de alerta e avaliação da evolução.' }
  ],

  etapas: [
    { n: '01', t: 'Avaliar', i: ['Anamnese', 'Biótipo e fototipo', 'Registo fotográfico'], d: 'Conhecer a pele antes de qualquer aplicação. Cada rosto pede uma leitura própria.' },
    { n: '02', t: 'Identificar riscos', i: ['Contraindicações', 'Critérios de adiamento', 'Consentimento informado'], d: 'Reconhecer o que impede ou adia o procedimento, e saber dizê-lo à cliente.' },
    { n: '03', t: 'Planear', i: ['Objetivo', 'Zonas do rosto', 'Produtos compatíveis'], d: 'Organizar o procedimento com critério, a partir do que a avaliação mostrou.' },
    { n: '04', t: 'Executar', i: ['Biossegurança', 'Cartuchos de utilização única', 'Controlo do aparelho'], d: 'Aplicar com higiene, controlo e atenção constante à resposta da pele.' },
    { n: '05', t: 'Acompanhar', i: ['Cuidados domiciliários', 'Fotoproteção', 'Evolução'], d: 'O cuidado continua depois da sessão, em casa e nas consultas seguintes.' }
  ],

  profs: [
    { id: 'estela', ig: 'https://www.instagram.com/draestelacardoso/', img: 'assets/estela-retrato.webp', nome: 'Dra. Estela Cardoso', ini: 'EC',
      roles: 'Educadora · Esteticista · Fisioterapeuta · Cosmetóloga · Gerontóloga',
      papel: 'Raciocínio clínico e indicação',
      bio: 'Pós-graduada em Estética, Cosmetologia, Fisioterapia Dermato-Funcional e Estética Integrativa, com especialização em Longevidade Saudável. Professora, palestrante, formadora e mentora, capacita profissionais no Brasil e na Europa.' },
    { id: 'belinha', ig: 'https://www.instagram.com/belinha.cardoso.mentora/', img: 'assets/belinha-2.webp', nome: 'Prof. Belinha Cardoso', ini: 'BC',
      roles: 'Empresária · Formadora · Palestrante · Mentora',
      papel: 'Técnica e prática aplicada',
      bio: 'Mais de 25 anos de experiência. Fundadora da BeLuxClinic, é referência em estética avançada e atendimento humanizado. Formadora e palestrante em congressos nacionais e internacionais, desenvolve projetos que aproximam Portugal e o Brasil.' },
    { id: 'manuela', ig: 'https://www.instagram.com/clinica.mferreira/', img: 'assets/manuela.webp', nome: 'Dra. Manuela Ferreira', ini: 'MF',
      roles: 'Esteticista · Naturopata · MF Profissional',
      papel: 'Cosmetologia e home care estratégico',
      bio: 'Mais de três décadas de experiência em estética e naturopatia. Criou a MF Profissional, marca portuguesa feita por profissionais para profissionais, que une tecnologia cosmética e ativos 100% naturais numa visão holística e integrativa.' }
  ],

  aprender: [
    'Avaliar a pele e reconhecer possíveis indicações e riscos.',
    'Preparar o procedimento com atenção à biossegurança.',
    'Compreender o equipamento, os cartuchos e os critérios de aplicação.',
    'Orientar os cuidados posteriores.',
    'Comunicar benefícios, limites e expectativas com clareza.'
  ]
};
