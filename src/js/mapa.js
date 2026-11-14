// =========================================================
// BANCO DE DADOS COMPLETO + PERGUNTAS POR REGIÃO (+25 XP CADA)
// =========================================================
const dadosBaciaPotengi = {
  'cerro-cora': {
    nome: 'Cerro Corá',
    badgeNome: 'CERRO CORÁ',
    trecho: 'Alto Curso • Nascente (Serra de Santana)',
    regime: 'RIO INTERMITENTE',
    mmAno: '600',
    comparativo: 'Menor índice da bacia • Clima semiárido',
    picoTexto: 'Pico: Fev–Mai',
    mensal: [35, 65, 115, 125, 90, 55, 40, 18, 10, 8, 14, 25],
    mesesPico: [2, 3, 4],
    bioma: 'Caatinga Hipoxerófila',
    hidrologia: 'Nascentes em relevo cristalino (~680 m)',
    impacto: 'Solo raso e alta taxa de evaporação',
    estacao: 'Fevereiro a Maio (66% do anual)',
    resumo: 'Onde o Rio Potengi nasce. Como chove pouco e de forma concentrada em poucos meses, o leito seca nos períodos de estiagem.',
    // Paleta quente de Semiárido (Dourado, Âmbar e Ciano)
    cores: {
      c1: '#FFB703',
      c2: '#FB8500',
      c3: '#00F5D4',
      glow: 'rgba(255, 183, 3, 0.28)'
    },
    quiz: {
      pergunta: 'O que acontece com o leito do Rio Potengi em Cerro Corá durante a estiagem?',
      opcoes: [
        'Ele seca temporariamente por ser intermitente',
        'Recebe água salgada vinda das marés',
        'Mantém o mesmo volume cheio o ano inteiro'
      ],
      correta: 0,
      explicacaoAcerto: 'Isso aí! Com média de 600 mm/ano e alta evaporação no semiárido, o rio é intermitente na nascente.',
      explicacaoErro: 'Na verdade, ele seca temporariamente: na nascente (600 mm/ano), o rio é intermitente nos meses sem chuva.'
    }
  },
  'sp-potengi': {
    nome: 'São Paulo do Potengi',
    badgeNome: 'S. P. POTENGI',
    trecho: 'Médio Curso • Agreste Potiguar',
    regime: 'RIO INTERMITENTE',
    mmAno: '760',
    comparativo: '+26% de chuva em relação à nascente',
    picoTexto: 'Pico: Mar–Jun',
    mensal: [42, 75, 135, 150, 115, 78, 55, 25, 15, 12, 22, 36],
    mesesPico: [2, 3, 4, 5],
    bioma: 'Transição Caatinga–Agreste',
    hidrologia: 'Barragem Campo Grande (abastecimento)',
    impacto: 'Reservatório vital para segurança hídrica',
    estacao: 'Março a Junho (63% do anual)',
    resumo: 'Trecho marcado pela Barragem Campo Grande, principal reservatório da bacia, responsável por acumular a água das cheias para o consumo regional.',
    // Paleta Agreste (Verde-Lima, Ciano e Amarelo Solar)
    cores: {
      c1: '#D9FF43',
      c2: '#24DF7B',
      c3: '#00BBF9',
      glow: 'rgba(217, 255, 67, 0.26)'
    },
    quiz: {
      pergunta: 'Qual estrutura garante o armazenamento de água em São Paulo do Potengi?',
      opcoes: [
        'O estuário de manguezal',
        'A Barragem Campo Grande',
        'As dunas costeiras de Natal'
      ],
      correta: 1,
      explicacaoAcerto: 'Perfeito! A Barragem Campo Grande acumula a água das cheias do médio curso para abastecer a região.',
      explicacaoErro: 'A resposta certa é a Barragem Campo Grande, principal reservatório hídrico do médio curso.'
    }
  },
  'macaiba': {
    nome: 'Macaíba',
    badgeNome: 'MACAÍBA',
    trecho: 'Baixo-Médio Curso • Transição Subúmida',
    regime: 'PERENIZAÇÃO GRADUAL',
    mmAno: '1.180',
    comparativo: 'Quase o dobro de chuva do alto curso',
    picoTexto: 'Pico: Mar–Jul',
    mensal: [65, 105, 185, 215, 180, 145, 105, 50, 30, 22, 30, 48],
    mesesPico: [2, 3, 4, 5, 6],
    bioma: 'Tabuleiros Costeiros e Mata Ciliar',
    hidrologia: 'Afluentes perenes e áreas de várzea',
    impacto: 'Agropecuária e crescimento urbano',
    estacao: 'Março a Julho (70% do anual)',
    resumo: 'Sob maior influência dos ventos úmidos do litoral, o volume pluviométrico salta acima de 1.100 mm e o rio passa a manter fluxo contínuo.',
    // Paleta Transição Úmida (Esmeralda, Azul Turquesa e Verde-Menta)
    cores: {
      c1: '#24DF7B',
      c2: '#00BBF9',
      c3: '#A8FF78',
      glow: 'rgba(36, 223, 123, 0.28)'
    },
    quiz: {
      pergunta: 'Por que o volume de chuvas em Macaíba quase dobra em relação à nascente?',
      opcoes: [
        'Pela altitude acima de 1.500 metros',
        'Pela maior proximidade com os ventos úmidos do litoral',
        'Porque nunca há estiagem no Agreste'
      ],
      correta: 1,
      explicacaoAcerto: 'Exato! A umidade vinda do Atlântico eleva as chuvas para 1.180 mm/ano e ajuda a perenizar o rio.',
      explicacaoErro: 'O motivo é a proximidade com os ventos úmidos do litoral, que elevam a média para 1.180 mm/ano.'
    }
  },
  'natal': {
    nome: 'Natal',
    badgeNome: 'NATAL',
    trecho: 'Baixo Curso • Foz e Estuário',
    regime: 'RIO PERENE',
    mmAno: '1.450',
    comparativo: '2,4x mais chuva que na nascente',
    picoTexto: 'Pico: Mar–Jul',
    mensal: [80, 125, 220, 260, 225, 195, 140, 65, 38, 25, 32, 45],
    mesesPico: [2, 3, 4, 5, 6],
    bioma: 'Manguezal e Mata Atlântica',
    hidrologia: 'Encontro com o Oceano Atlântico',
    impacto: 'Alta impermeabilização urbana',
    estacao: 'Março a Julho (72% do anual)',
    resumo: 'Na foz, a umidade vinda do Oceano Atlântico eleva o volume anual para 1.450 mm, mantendo o rio perene e alimentando o ecossistema de manguezal.',
    // Paleta Estuário/Oceano (Ciano Elétrico, Verde-Lima e Azul Oceano)
    cores: {
      c1: '#00F5D4',
      c2: '#D3EC73',
      c3: '#00BBF9',
      glow: 'rgba(0, 245, 212, 0.28)'
    },
    quiz: {
      pergunta: 'Qual ecossistema costeiro se desenvolve na foz do Rio Potengi em Natal?',
      opcoes: [
        'Caatinga arbustiva seca',
        'Manguezal adaptado à mistura de água doce e salgada',
        'Campos rupestres de altitude'
      ],
      correta: 1,
      explicacaoAcerto: 'Mandou bem! Com 1.450 mm/ano de chuva e o encontro com o mar, o estuário abriga ricos manguezais.',
      explicacaoErro: 'Na foz em Natal forma-se o manguezal, adaptado ao encontro das águas doces do rio com as marés.'
    }
  }
};

// =========================================================
// ESTADO DO JOGO (XP ATÉ 100 E PROGRESSO DAS PERGUNTAS)
// =========================================================
const XP_MAXIMO = 100;
const XP_POR_ACERTO = 25;
let xpAtual = 0;

// Guarda o estado individual do quiz de cada região
const estadoQuizzes = {
  'cerro-cora': { respondido: false, acertou: false, escolha: null },
  'sp-potengi': { respondido: false, acertou: false, escolha: null },
  'macaiba':    { respondido: false, acertou: false, escolha: null },
  'natal':      { respondido: false, acertou: false, escolha: null }
};

const regioesVisitadas = new Set(['natal']);

// Elementos do DOM
const xpHud = document.getElementById('xp-hud');
const xpTexto = document.getElementById('xp-texto');
const xpBarra = document.getElementById('xp-barra');
const contadorEl = document.getElementById('contador-regioes');
const pinos = document.querySelectorAll('.pino-regiao');
const pills = document.querySelectorAll('.pill-cidade');

function adicionarXP(pontos) {
  if (pontos <= 0) return;
  xpAtual = Math.min(xpAtual + pontos, XP_MAXIMO);

  const porcentagem = (xpAtual / XP_MAXIMO) * 100;
  xpTexto.textContent = `${xpAtual} / ${XP_MAXIMO} XP`;
  xpBarra.style.width = `${porcentagem}%`;

  xpHud.classList.remove('ganhou');
  void xpHud.offsetWidth; // Reinicia a animação de pulso
  xpHud.classList.add('ganhou');

  if (xpAtual >= XP_MAXIMO) {
    xpHud.classList.add('maximo');
    xpTexto.textContent = '100 / 100 XP ★';
  }
}

function aplicarPaletaRegiao(cores) {
  const root = document.documentElement.style;
  root.setProperty('--cor-tema-1', cores.c1);
  root.setProperty('--cor-tema-2', cores.c2);
  root.setProperty('--cor-tema-3', cores.c3);
  root.setProperty('--cor-tema-glow', cores.glow);
}

function renderizarQuizRegiao(chave) {
  const dados = dadosBaciaPotengi[chave];
  const estado = estadoQuizzes[chave];

  const badgeEl = document.getElementById('quiz-badge');
  const perguntaEl = document.getElementById('quiz-pergunta');
  const opcoesEl = document.getElementById('quiz-opcoes');
  const feedbackEl = document.getElementById('quiz-feedback');

  perguntaEl.textContent = dados.quiz.pergunta;
  opcoesEl.innerHTML = '';

  if (!estado.respondido) {
    badgeEl.innerHTML = `DESAFIO DE ${dados.badgeNome} <span class="separador">•</span> <strong class="xp">+${XP_POR_ACERTO} XP</strong>`;
    feedbackEl.hidden = true;
  } else if (estado.acertou) {
    badgeEl.innerHTML = `${dados.badgeNome} CONCLUÍDO <span class="separador">•</span> <strong class="xp">+${XP_POR_ACERTO} XP</strong>`;
    feedbackEl.hidden = false;
    feedbackEl.className = 'quiz-feedback acerto';
    feedbackEl.textContent = dados.quiz.explicacaoAcerto;
  } else {
    badgeEl.innerHTML = `${dados.badgeNome} RESPONDIDO <span class="separador">•</span> <strong class="xp">0 XP</strong>`;
    feedbackEl.hidden = false;
    feedbackEl.className = 'quiz-feedback erro';
    feedbackEl.textContent = dados.quiz.explicacaoErro;
  }

  dados.quiz.opcoes.forEach((textoOpcao, indice) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'btn-quiz-opcao';

    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoOpcao;

    const spanIcone = document.createElement('span');
    spanIcone.setAttribute('aria-hidden', 'true');

    if (estado.respondido) {
      botao.disabled = true;
      if (indice === dados.quiz.correta) {
        botao.classList.add('correta');
        spanIcone.textContent = '✓';
      } else if (indice === estado.escolha && !estado.acertou) {
        botao.classList.add('errada');
        spanIcone.textContent = '✕';
      }
    }

    botao.appendChild(spanTexto);
    botao.appendChild(spanIcone);

    botao.addEventListener('click', () => {
      if (estado.respondido) return;

      const acertou = indice === dados.quiz.correta;
      estado.respondido = true;
      estado.acertou = acertou;
      estado.escolha = indice;

      if (acertou) {
        adicionarXP(XP_POR_ACERTO);
      }

      renderizarQuizRegiao(chave);
    });

    opcoesEl.appendChild(botao);
  });
}

function renderizarGraficoMensal(valores, mesesPico) {
  const containerBarras = document.getElementById('grafico-barras');
  const maxValor = 260;
  containerBarras.innerHTML = '';

  valores.forEach((valor, indice) => {
    const barra = document.createElement('div');
    barra.className = 'barra-mes';
    if (mesesPico.includes(indice)) {
      barra.classList.add('pico');
    }
    const alturaPercentual = Math.max((valor / maxValor) * 100, 8);
    barra.style.height = `${alturaPercentual}%`;
    barra.title = `${valor} mm`;
    containerBarras.appendChild(barra);
  });
}

function atualizarRegiao(chave) {
  const dados = dadosBaciaPotengi[chave];
  if (!dados) return;

  // Atualiza pinos e botões de atalho
  pinos.forEach((pino) => {
    pino.classList.toggle('ativo', pino.dataset.regiao === chave);
  });

  pills.forEach((pill) => {
    pill.classList.toggle('ativa', pill.dataset.regiao === chave);
  });

  // Atualiza contador de exploração
  regioesVisitadas.add(chave);
  contadorEl.textContent = `${regioesVisitadas.size}/4 REGIÕES`;

  // Troca as cores das bordas giratórias e destaques conforme o bioma
  aplicarPaletaRegiao(dados.cores);

  // Atualiza o desafio da região (+25 XP)
  renderizarQuizRegiao(chave);

  // Atualiza dados pluviométricos e correlacionados
  document.getElementById('regiao-trecho').textContent = dados.trecho;
  document.getElementById('regiao-nome').textContent = dados.nome;
  document.getElementById('regiao-regime').textContent = dados.regime;
  document.getElementById('regiao-mm').textContent = dados.mmAno;
  document.getElementById('regiao-comparativo').textContent = dados.comparativo;
  document.getElementById('regiao-pico').textContent = dados.picoTexto;

  document.getElementById('regiao-bioma').textContent = dados.bioma;
  document.getElementById('regiao-hidrologia').textContent = dados.hidrologia;
  document.getElementById('regiao-impacto').textContent = dados.impacto;
  document.getElementById('regiao-estacao').textContent = dados.estacao;
  document.getElementById('regiao-resumo').textContent = dados.resumo;

  renderizarGraficoMensal(dados.mensal, dados.mesesPico);
}

// Eventos de toque nos pinos do mapa e nos atalhos
pinos.forEach((pino) => {
  pino.addEventListener('click', () => atualizarRegiao(pino.dataset.regiao));
});

pills.forEach((pill) => {
  pill.addEventListener('click', () => atualizarRegiao(pill.dataset.regiao));
});

// Inicia com Natal selecionada
atualizarRegiao('natal');