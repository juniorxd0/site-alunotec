/**
 * Catálogo de Cursos da AlunoTec
 * Polos Autorizados: Cruzeiro do Sul Virtual & Cefe Educa EJA
 */

const AlunoTecCursos = [
  // --- EJA CEFE EDUCA ---
  {
    id: 'eja-medio',
    nome: 'EJA - Ensino Médio Completo',
    categoria: 'eja',
    polo: 'Cefe Educa',
    modalidade: '100% EAD',
    tempo: 'Conclusão rápida no seu ritmo',
    descricao: 'Termine o Ensino Médio a distância com certificado oficial reconhecido pelo MEC e publicação em Diário Oficial.',
    destaque: true,
    tag: 'Mais Procurado'
  },
  {
    id: 'eja-fundamental',
    nome: 'EJA - Ensino Fundamental (Anos Finais)',
    categoria: 'eja',
    polo: 'Cefe Educa',
    modalidade: '100% EAD',
    tempo: 'Flexível e seguro',
    descricao: 'Recupere o tempo perdido e prepare-se para o Ensino Médio ou cursos técnicos com total suporte dos professores.',
    destaque: false,
    tag: 'Início Imediato'
  },

  // --- GRADUAÇÃO CRUZEIRO DO SUL ---
  {
    id: 'grad-ads',
    nome: 'Análise e Desenvolvimento de Sistemas',
    categoria: 'graduacao',
    polo: 'Cruzeiro do Sul Virtual',
    modalidade: '100% EAD',
    tempo: '2,5 anos (Tecnólogo)',
    descricao: 'Formação prática e rápida para entrar no mercado de tecnologia e programação com alto índice de empregabilidade.',
    destaque: true,
    tag: 'Alta Demanda'
  },
  {
    id: 'grad-pedagogia',
    nome: 'Pedagogia (Licenciatura)',
    categoria: 'graduacao',
    polo: 'Cruzeiro do Sul Virtual',
    modalidade: '100% EAD',
    tempo: '4 anos',
    descricao: 'Capacite-se para atuar na educação infantil, anos iniciais e gestão educacional com diploma reconhecido pelo MEC.',
    destaque: true,
    tag: 'Tradição & Emprego'
  },
  {
    id: 'grad-adm',
    nome: 'Administração (Bacharelado)',
    categoria: 'graduacao',
    polo: 'Cruzeiro do Sul Virtual',
    modalidade: '100% EAD',
    tempo: '4 anos',
    descricao: 'Desenvolva visão estratégica, liderança e gestão financeira para cargos corporativos ou seu próprio negócio.',
    destaque: false,
    tag: 'Carreira Global'
  },
  {
    id: 'grad-eng-software',
    nome: 'Engenharia de Software (Bacharelado)',
    categoria: 'graduacao',
    polo: 'Cruzeiro do Sul Virtual',
    modalidade: '100% EAD',
    tempo: '4 anos',
    descricao: 'Aprenda arquitetura de sistemas, inteligência artificial, computação em nuvem e gestão de projetos tech.',
    destaque: false,
    tag: 'Tecnologia'
  },
  {
    id: 'grad-rh',
    nome: 'Gestão de Recursos Humanos',
    categoria: 'graduacao',
    polo: 'Cruzeiro do Sul Virtual',
    modalidade: '100% EAD',
    tempo: '2 anos (Tecnólogo)',
    descricao: 'Formação ágil para seleção, treinamento, gestão de talentos e clima organizacional em empresas modernas.',
    destaque: false,
    tag: 'Rápida Inserção'
  },
  {
    id: 'grad-contabeis',
    nome: 'Ciências Contábeis',
    categoria: 'graduacao',
    polo: 'Cruzeiro do Sul Virtual',
    modalidade: '100% EAD',
    tempo: '4 anos',
    descricao: 'Domine auditoria, controladoria e perícia contábil com habilitação para obter o registro no CRC.',
    destaque: false,
    tag: 'Mercado Estável'
  },

  // --- PÓS-GRADUAÇÃO CRUZEIRO DO SUL ---
  {
    id: 'pos-gestao-escolar',
    nome: 'Gestão Escolar e Coordenação Pedagógica',
    categoria: 'pos',
    polo: 'Cruzeiro do Sul Virtual',
    modalidade: '100% EAD',
    tempo: '6 a 12 meses',
    descricao: 'Especialize-se na liderança de escolas, planejamento pedagógico e processos educacionais inovadores.',
    destaque: true,
    tag: 'Evolução na Carreira'
  },
  {
    id: 'pos-mba-lideranca',
    nome: 'MBA em Gestão Estratégica de Pessoas e Liderança',
    categoria: 'pos',
    polo: 'Cruzeiro do Sul Virtual',
    modalidade: '100% EAD',
    tempo: '6 a 12 meses',
    descricao: 'Desenvolva habilidades executivas para gerenciar equipes de alta performance e transformar resultados.',
    destaque: false,
    tag: 'Executivo'
  },
  {
    id: 'pos-psicopedagogia',
    nome: 'Psicopedagogia Clínica e Institucional',
    categoria: 'pos',
    polo: 'Cruzeiro do Sul Virtual',
    modalidade: '100% EAD',
    tempo: '6 a 12 meses',
    descricao: 'Capacite-se para diagnosticar e intervir nas dificuldades de aprendizagem com embasamento multidisciplinar.',
    destaque: false,
    tag: 'Especialização'
  }
];

window.AlunoTecCursos = AlunoTecCursos;
