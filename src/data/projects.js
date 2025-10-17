export const projects = [
  {
    id: 1,
    title: 'HerbTec - Sistema de Recomendação de Herbicidas',
    slug: 'herbtec',
    category: 'web development',
    featured: true,
    shortDescription:
      'Plataforma full-stack para gestão e recomendação de herbicidas para usinas de cana-de-açúcar',
    description: `
      Sistema completo de gerenciamento e recomendação de herbicidas desenvolvido para otimizar
      o controle de plantas daninhas em usinas de cana-de-açúcar. A aplicação oferece análise
      inteligente baseada em múltiplos fatores como tipo de solo, clima, e histórico de aplicações.

      O sistema inclui dashboards interativos, gestão de usuários com diferentes níveis de acesso,
      histórico completo de recomendações, e funcionalidades de orçamento.
    `,
    image: '/images/project_one/Herbetech.png',
    images: [
      '/images/project_one/Herbetech.png',
      '/images/project_one/dashboard.png',
      '/images/project_one/Resumo_herbicidas.png',
      '/images/project_one/Tabela_herbicidas.png',
      '/images/project_one/uploadplanilhas.png',
    ],
    technologies: [
      'Vue.js 3',
      'NestJS',
      'MongoDB',
      'TypeScript',
      'TailwindCSS',
      'Vue Query',
      'Keycloak',
    ],
    features: [
      'Autenticação e autorização via Keycloak',
      'Sistema de recomendação inteligente de herbicidas',
      'Dashboard com métricas e KPIs em tempo real',
      'Gestão de usinas e talhões',
      'Histórico completo de aplicações',
      'Sistema de orçamento e custos',
      'Exportação de relatórios',
      'Níveis de acesso granulares (Admin, Membro, Admin-Usina, Membro-Usina)',
      'API RESTful documentada com Swagger',
    ],
    gitURL: '#',
    webURL: '#',
    demoAvailable: false,
    year: '2024',
    role: 'Full Stack Developer',
    challenges: [
      'Implementação de regras complexas de negócio para recomendação de herbicidas',
      'Integração com Keycloak para autenticação SSO',
      'Design de sistema escalável com Clean Architecture',
      'Performance optimization para dashboards com grandes volumes de dados',
    ],
  },
  {
    id: 2,
    title: 'CondoCare Web - Sistema Administrativo de Condomínios',
    slug: 'condocare-web',
    category: 'web development',
    featured: true,
    shortDescription:
      'Plataforma completa de gestão condominial para síndicos, zeladores e porteiros',
    description: `
      Sistema web completo desenvolvido para administração de condomínios, oferecendo ferramentas
      essenciais para síndicos, zeladores e porteiros gerenciarem o dia a dia do condomínio.

      A plataforma centraliza todas as operações administrativas, desde o controle de entregas
      até a gestão de prestadores de serviço, proporcionando eficiência e organização para a
      administração condominial.
    `,
    image: '/images/project_two/CondoCare.png',
    images: [
      '/images/project_two/CondoCare.png',
      '/images/project_two/CondoCareLogin.png',
      '/images/project_two/EntregasCondoCare.png',
      '/images/project_two/EnviarNotificacoesCondoCare.png',
      '/images/project_two/PrestadoresDeServico.png',
      '/images/project_two/SupervisoresCondoCare.png',
      '/images/project_two/TicketsCondoCare.png',
      '/images/project_two/VincularMoradoresCondocare.png',
    ],
    technologies: [
      'React',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Orval',
      'TypeScript',
      'TailwindCSS',
    ],
    features: [
      'Gestão completa de entregas na portaria',
      'Sistema de tickets e ocorrências',
      'Registro e acompanhamento de chamados dos porteiros',
      'Atualização de status de chamados em tempo real',
      'Gestão de prestadores de serviço',
      'Dashboard administrativo com métricas',
      'Diferentes níveis de acesso (Síndico, Zelador, Porteiro)',
      'Histórico completo de atividades',
      'Notificações automáticas',
    ],
    gitURL: '#',
    webURL: '#',
    demoAvailable: false,
    year: '2024',
    role: 'Full Stack Developer',
    challenges: [
      'Integração complexa entre Prisma e Orval para type-safety completo',
      'Implementar sistema de notificações em tempo real',
      'Gerenciar diferentes fluxos de trabalho para cada tipo de usuário',
      'Otimizar performance com grandes volumes de registros diários',
    ],
  },
  {
    id: 3,
    title: 'F1 Championship Manager',
    slug: 'f1-championship',
    category: 'web development',
    featured: false,
    shortDescription:
      'Sistema de gestão de campeonato de Fórmula 1 entre amigos com análise de estatísticas',
    description: `
      Aplicação desenvolvida para gerenciar um campeonato de Fórmula 1 entre amigos,
      oferecendo controle completo de pontuações, estatísticas e classificações.

      O sistema utiliza Python tanto no frontend quanto no backend, com Streamlit
      proporcionando uma interface web interativa e responsiva. Todos os dados são
      armazenados localmente em SQLite.
    `,
    image: '/images/project_three/F1_classificacao.png',
    images: [
      '/images/project_three/F1_classificacao.png',
      '/images/project_three/F1_equipes.png',
      '/images/project_three/F1_estatisticas.png',
      '/images/project_three/F1_estatisticas_gerais.png',
      '/images/project_three/F1_Gerencia_resultado.png',
      '/images/project_three/F1_pilotos.png',
      '/images/project_three/F1_Projecao.png',
      '/images/project_three/F1_resultados.png',
    ],
    technologies: ['Python', 'Streamlit', 'SQLite', 'FastAPI', 'Pandas'],
    features: [
      'Frontend e backend totalmente em Python',
      'Interface web interativa com Streamlit',
      'Armazenamento de dados em SQLite',
      'Gestão de pilotos e equipes',
      'Registro de resultados de corridas',
      'Tabela de classificação em tempo real',
      'Estatísticas detalhadas por piloto',
      'Histórico completo de temporadas',
      'Gráficos de evolução de pontos',
    ],
    gitURL: '#',
    webURL: '#',
    demoAvailable: false,
    year: '2024',
    role: 'Full Stack Developer',
    challenges: [
      'Criar interface responsiva e intuitiva com Streamlit',
      'Implementar lógica complexa de pontuação da F1',
      'Otimizar queries SQLite para visualizações rápidas',
      'Gerar gráficos interativos de estatísticas',
    ],
  },
  {
    id: 4,
    title: 'FIFA Bet - Sistema de Apostas Corporativo',
    slug: 'fifa-bet',
    category: 'web development',
    featured: true,
    shortDescription:
      'Plataforma de apostas para campeonato de FIFA da empresa com gestão de times e odds',
    description: `
      Sistema completo de apostas desenvolvido para o campeonato de FIFA da empresa,
      permitindo que funcionários apostem nos jogos e acompanhem suas pontuações.

      A aplicação integra-se com Supabase para backend e autenticação, e utiliza
      a API do Challonge para geração automática de chaves e partidas do torneio.
      Dashboard completo mostra classificações, odds e resultados em tempo real.
    `,
    image: '/images/project_four/Bet_dashboard.png',
    images: [
      '/images/project_four/Bet_dashboard.png',
      '/images/project_four/bet_classificacao.png',
      '/images/project_four/Bet_duplas.png',
      '/images/project_four/Bet_solutions_campeonato.png',
      '/images/project_four/Meu_perfil.png',
      '/images/project_four/Minhas Apostas.png',
      '/images/project_four/Odds_partidas.png',
    ],
    technologies: [
      'Next.js',
      'Supabase',
      'TypeScript',
      'TailwindCSS',
      'Challonge API',
      'React Query',
    ],
    features: [
      'Criação e gestão de equipes (duplas)',
      'Sistema de odds dinâmicas',
      'Ranking de principais apostadores',
      'Dashboard com classificações em tempo real',
      'Visualização detalhada de partidas',
      'Integração com Challonge para geração automática de chaves',
      'Controle automático de pontuação',
      'Sistema de apostas com saldo virtual',
      'Histórico completo de apostas e resultados',
      'Notificações de início de partidas',
    ],
    gitURL: '#',
    webURL: '#',
    demoAvailable: false,
    year: '2024',
    role: 'Full Stack Developer',
    challenges: [
      'Integrar Challonge API para sincronização automática de partidas',
      'Implementar sistema de odds justo e balanceado',
      'Criar dashboard em tempo real com Supabase realtime',
      'Gerenciar estado complexo de apostas e resultados',
      'Garantir integridade de dados em transações de apostas',
    ],
  },
  {
    id: 5,
    title: 'CondoCare Mobile - App para Moradores',
    slug: 'condocare-mobile',
    category: 'mobile app',
    featured: true,
    shortDescription:
      'Aplicativo mobile para moradores de condomínios com gestão de entregas e tickets',
    description: `
      Aplicativo mobile desenvolvido em React Native para proporcionar aos moradores
      de condomínios uma forma prática e eficiente de gerenciar entregas, reportar
      problemas e se manter informados sobre avisos importantes.

      O app oferece funcionalidades essenciais como leitura de QR Code para validação
      de entregas, abertura de tickets para problemas em áreas comuns, mural de avisos
      e notificações push quando entregas chegam na portaria.
    `,
    image: '/images/project_five/App_dashboard.jpg',
    images: [
      '/images/project_five/App_dashboard.jpg',
      '/images/project_five/App_entregas.jpg',
      '/images/project_five/App_notificacoes.jpg',
      '/images/project_five/App_ocorrencia.jpg',
      '/images/project_five/App_perfil.jpg',
    ],
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'React Navigation',
      'React Query',
      'QR Code Scanner',
      'Push Notifications',
    ],
    features: [
      'Leitura de QR Code para validação de entregas',
      'Sistema de tickets para problemas em áreas comuns',
      'Mural de avisos com notificações',
      'Notificações push para entregas na portaria',
      'Visualização de status de tickets em tempo real',
      'Histórico completo de tickets abertos',
      'Interface intuitiva e responsiva',
      'Modo offline para visualização de dados',
      'Anexar fotos aos tickets',
      'Sistema de comentários em tickets',
    ],
    gitURL: '#',
    webURL: '#',
    demoAvailable: false,
    year: '2024',
    role: 'Mobile Developer',
    challenges: [
      'Implementar scanner de QR Code performático',
      'Gerenciar notificações push de forma confiável',
      'Criar experiência offline-first',
      'Otimizar performance em dispositivos diversos',
      'Sincronização de dados em tempo real',
      'Implementar upload de imagens otimizado',
    ],
  },
]

// Função helper para pegar projetos por categoria
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects
  return projects.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  )
}

// Função helper para pegar projetos em destaque
export const getFeaturedProjects = () => {
  return projects.filter((p) => p.featured)
}

// Função helper para pegar projeto por ID
export const getProjectById = (id) => {
  return projects.find((p) => p.id === parseInt(id))
}

// Função helper para pegar projeto por slug
export const getProjectBySlug = (slug) => {
  return projects.find((p) => p.slug === slug)
}
