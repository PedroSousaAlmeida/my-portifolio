export const projects = [
  {
    id: 1,
    title: 'HerbTec - Sistema de Recomendação de Herbicidas',
    slug: 'herbtec',
    category: 'web development',
    featured: true,
    shortDescription: 'Plataforma full-stack para gestão e recomendação de herbicidas para usinas de cana-de-açúcar',
    description: `
      Sistema completo de gerenciamento e recomendação de herbicidas desenvolvido para otimizar
      o controle de plantas daninhas em usinas de cana-de-açúcar. A aplicação oferece análise
      inteligente baseada em múltiplos fatores como tipo de solo, clima, e histórico de aplicações.

      O sistema inclui dashboards interativos, gestão de usuários com diferentes níveis de acesso,
      histórico completo de recomendações, e funcionalidades de orçamento.
    `,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=800&fit=crop'
    ],
    technologies: ['Vue.js 3', 'NestJS', 'MongoDB', 'TypeScript', 'TailwindCSS', 'Pinia', 'Vue Query', 'Keycloak', 'CASL'],
    features: [
      'Autenticação e autorização via Keycloak',
      'Sistema de recomendação inteligente de herbicidas',
      'Dashboard com métricas e KPIs em tempo real',
      'Gestão de usinas e talhões',
      'Histórico completo de aplicações',
      'Sistema de orçamento e custos',
      'Exportação de relatórios',
      'Níveis de acesso granulares (Admin, Membro, Admin-Usina, Membro-Usina)',
      'API RESTful documentada com Swagger'
    ],
    gitURL: 'https://github.com/seu-usuario/herbtec',
    webURL: '#',
    demoAvailable: false,
    year: '2024',
    role: 'Full Stack Developer',
    challenges: [
      'Implementação de regras complexas de negócio para recomendação de herbicidas',
      'Integração com Keycloak para autenticação SSO',
      'Design de sistema escalável com Clean Architecture',
      'Performance optimization para dashboards com grandes volumes de dados'
    ]
  },
  {
    id: 2,
    title: 'Portfolio Pessoal Interativo',
    slug: 'portfolio',
    category: 'web development',
    featured: true,
    shortDescription: 'Portfolio moderno e responsivo desenvolvido com Vue 3 e animações avançadas',
    description: `
      Portfolio pessoal desenvolvido com as tecnologias mais modernas do ecossistema Vue.js.
      Apresenta design clean, dark mode, animações suaves e navegação intuitiva.

      O projeto demonstra habilidades em frontend development, UX/UI design e otimização
      de performance. Inclui seção de projetos dinâmica, formulário de contato funcional,
      e integração com APIs externas.
    `,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop'
    ],
    technologies: ['Vue.js 3', 'TailwindCSS', 'AOS', 'EmailJS', 'Vite', 'Vue Router'],
    features: [
      'Design responsivo mobile-first',
      'Animações on-scroll com AOS',
      'Seção de projetos com filtros dinâmicos',
      'Formulário de contato funcional com EmailJS',
      'Navegação suave entre seções',
      'Glassmorphism effects',
      'Performance otimizada com lazy loading',
      'SEO friendly'
    ],
    gitURL: 'https://github.com/seu-usuario/portfolio',
    webURL: '#',
    demoAvailable: true,
    year: '2024',
    role: 'Frontend Developer',
    challenges: [
      'Criar animações performáticas sem comprometer UX',
      'Implementar design system consistente',
      'Otimizar carregamento de imagens e assets',
      'Garantir acessibilidade em todos os componentes'
    ]
  },
  {
    id: 3,
    title: 'E-commerce Dashboard',
    slug: 'ecommerce-dashboard',
    category: 'web development',
    featured: false,
    shortDescription: 'Dashboard administrativo para gerenciamento de e-commerce com analytics',
    description: `
      Dashboard completo para administração de loja virtual, incluindo gestão de produtos,
      pedidos, clientes e relatórios analíticos. Interface intuitiva com gráficos interativos
      e métricas em tempo real.

      Sistema desenvolvido com foco em usabilidade e performance, permitindo que administradores
      gerenciem toda operação da loja de forma eficiente.
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=800&fit=crop'
    ],
    technologies: ['Vue.js 3', 'Chart.js', 'ApexCharts', 'Pinia', 'Axios', 'TailwindCSS'],
    features: [
      'Dashboard com KPIs e métricas',
      'Gestão de produtos com upload de imagens',
      'Sistema de pedidos e status',
      'Relatórios de vendas com gráficos',
      'Gestão de clientes',
      'Sistema de notificações',
      'Exportação de dados para CSV/Excel',
      'Dark mode'
    ],
    gitURL: 'https://github.com/seu-usuario/ecommerce-dashboard',
    webURL: '#',
    demoAvailable: false,
    year: '2023',
    role: 'Frontend Developer',
    challenges: [
      'Implementar gráficos performáticos com grandes volumes de dados',
      'Criar sistema de filtros complexos',
      'Otimizar renderização de listas longas',
      'Implementar state management eficiente'
    ]
  },
  {
    id: 4,
    title: 'Task Manager API',
    slug: 'task-manager-api',
    category: 'backend',
    featured: false,
    shortDescription: 'API RESTful para gerenciamento de tarefas com autenticação JWT',
    description: `
      API robusta desenvolvida com NestJS seguindo princípios de Clean Architecture.
      Oferece endpoints completos para gerenciamento de tarefas, projetos e equipes.

      Implementa autenticação segura, autorização baseada em roles, e documentação
      automática com Swagger. Banco de dados MongoDB com Mongoose ODM.
    `,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=800&fit=crop'
    ],
    technologies: ['NestJS', 'MongoDB', 'TypeScript', 'JWT', 'Swagger', 'Jest', 'Docker'],
    features: [
      'Autenticação JWT com refresh tokens',
      'CRUD completo de tarefas e projetos',
      'Sistema de tags e categorias',
      'Comentários e anexos em tarefas',
      'Notificações em tempo real',
      'Documentação Swagger/OpenAPI',
      'Testes unitários e e2e',
      'Docker containerization'
    ],
    gitURL: 'https://github.com/seu-usuario/task-manager-api',
    webURL: '#',
    demoAvailable: false,
    year: '2024',
    role: 'Backend Developer',
    challenges: [
      'Implementar autorização granular com CASL',
      'Otimizar queries complexas no MongoDB',
      'Criar arquitetura escalável e manutenível',
      'Implementar cobertura de testes adequada'
    ]
  },
  {
    id: 5,
    title: 'Weather App',
    slug: 'weather-app',
    category: 'mobile app',
    featured: false,
    shortDescription: 'Aplicativo mobile de previsão do tempo com geolocalização',
    description: `
      Aplicativo mobile desenvolvido com Vue 3 e Capacitor para iOS e Android.
      Integra APIs de previsão do tempo oferecendo dados precisos e atualizados.

      Interface intuitiva com animações suaves, suporte a múltiplas localizações,
      e notificações de alertas meteorológicos.
    `,
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=1200&h=800&fit=crop'
    ],
    technologies: ['Vue.js 3', 'Capacitor', 'TailwindCSS', 'OpenWeather API', 'Geolocation API'],
    features: [
      'Previsão do tempo em tempo real',
      'Geolocalização automática',
      'Salvar múltiplas localizações',
      'Previsão de 7 dias',
      'Gráficos de temperatura e precipitação',
      'Alertas meteorológicos',
      'Dark/Light mode',
      'Offline support'
    ],
    gitURL: 'https://github.com/seu-usuario/weather-app',
    webURL: '#',
    demoAvailable: true,
    year: '2023',
    role: 'Mobile Developer',
    challenges: [
      'Otimizar para diferentes tamanhos de tela',
      'Implementar cache eficiente de dados',
      'Gerenciar estados de conectividade',
      'Criar animações nativas suaves'
    ]
  },
  {
    id: 6,
    title: 'Blog CMS',
    slug: 'blog-cms',
    category: 'web development',
    featured: false,
    shortDescription: 'Sistema de gerenciamento de conteúdo para blogs com editor rich text',
    description: `
      CMS completo para blogs desenvolvido com stack moderna. Inclui editor de texto rico,
      gestão de mídia, sistema de categorias e tags, e publicação programada.

      Interface administrativa intuitiva com preview em tempo real e SEO optimization.
    `,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop'
    ],
    technologies: ['Vue.js 3', 'NestJS', 'PostgreSQL', 'TipTap Editor', 'AWS S3', 'Redis'],
    features: [
      'Editor de texto rico (TipTap)',
      'Upload de imagens para S3',
      'Sistema de categorias e tags',
      'Publicação programada',
      'SEO metadata',
      'Preview em tempo real',
      'Sistema de comentários',
      'Multi-idioma'
    ],
    gitURL: 'https://github.com/seu-usuario/blog-cms',
    webURL: '#',
    demoAvailable: false,
    year: '2023',
    role: 'Full Stack Developer',
    challenges: [
      'Implementar editor rico performático',
      'Otimizar upload e serving de imagens',
      'Criar sistema de cache eficiente',
      'SEO optimization e meta tags dinâmicas'
    ]
  }
]

// Função helper para pegar projetos por categoria
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects
  return projects.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

// Função helper para pegar projetos em destaque
export const getFeaturedProjects = () => {
  return projects.filter(p => p.featured)
}

// Função helper para pegar projeto por ID
export const getProjectById = (id) => {
  return projects.find(p => p.id === parseInt(id))
}

// Função helper para pegar projeto por slug
export const getProjectBySlug = (slug) => {
  return projects.find(p => p.slug === slug)
}
