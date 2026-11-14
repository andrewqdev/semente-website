// =========================================================
// BANCO DE DADOS DAS REGIÕES DA BACIA DO RIO POTENGI
// =========================================================
const dadosBaciaPotengi = {
  'cerro-cora': {
    nome: 'Cerro Corá',
    trecho: 'Alto Curso • Nascente (Serra de Santana)',
    regime: 'RIO INTERMITENTE',
    tipoRegime: 'intermitente',
    mmAno: '600',
    comparativo: 'Menor índice da bacia • Clima semiárido',
    picoTexto: 'Pico: Fev–Mai',
    mensal: [35, 65, 115, 125, 90, 55, 40, 18, 10, 8, 14, 25],
    mesesPico: [2, 3, 4], // Índices (0=Jan ... 11=Dez)
    bioma: 'Caatinga Hipoxerófila',
    hidrologia: 'Nascentes em relevo cristalino (~680 m)',
    impacto: 'Solo raso e alta taxa de evaporação',
    estacao: 'Fevereiro a Maio (66% do anual)',
    resumo: 'Onde o Rio Potengi nasce. Como chove pouco e de forma concentrada em poucos meses, o leito seca nos períodos de estiagem.'
  },
  'sp-potengi': {
    nome: 'São Paulo do Potengi',
    trecho: 'Médio Curso • Agreste Potiguar',
    regime: 'RIO INTERMITENTE',
    tipoRegime: 'intermitente',
    mmAno: '760',
    comparativo: '+26% de chuva em relação à nascente',
    picoTexto: 'Pico: Mar–Jun',
    mensal: [42, 75, 135, 150, 115, 78, 55, 25, 15, 12, 22, 36],
    mesesPico: [2, 3, 4, 5],
    bioma: 'Transição Caatinga–Agreste',
    hidrologia: 'Barragem Campo Grande (abastecimento)',
    impacto: 'Reservatório vital para segurança hídrica',
    estacao: 'Março a Junho (63% do anual)',
    resumo: 'Trecho marcado pela Barragem Campo Grande, principal reservatório da bacia, responsável por acumular a água das cheias para o consumo regional.'
  },
  'macaiba': {
    nome: 'Macaíba',
    trecho: 'Baixo-Médio Curso • Transição Subúmida',
    regime: 'PERENIZAÇÃO GRADUAL',
    tipoRegime: 'perene',
    mmAno: '1.180',
    comparativo: 'Quase o dobro de chuva do alto curso',
    picoTexto: 'Pico: Mar–Jul',
    mensal: [65, 105, 185, 215, 180, 145, 105, 50, 30, 22, 30, 48],
    mesesPico: [2, 3, 4, 5, 6],
    bioma: 'Tabuleiros Costeiros e Mata Ciliar',
    hidrologia: 'Afluentes perenes e áreas de várzea',
    impacto: 'Agropecuária e crescimento urbano',
    estacao: 'Março a Julho (70% do anual)',
    resumo: 'Sob maior influência dos ventos úmidos do litoral, o volume pluviométrico salta acima de 1.100 mm e o rio passa a manter fluxo contínuo.'
  },
  'natal': {
    nome: 'Natal',
    trecho: 'Baixo Curso • Foz e Estuário',
    regime: 'RIO PERENE',
    tipoRegime: 'perene',
    mmAno: '1.450',
    comparativo: '2,4x mais chuva que na nascente',
    picoTexto: 'Pico: Mar–Jul',
    mensal: [80, 125, 220, 260, 225, 195, 140, 65, 38, 25, 32, 45],
    mesesPico: [2, 3, 4, 5, 6],
    bioma: 'Manguezal e Mata Atlântica',
    hidrologia: 'Encontro com o Oceano Atlântico',
    impacto: 'Alta impermeabilização urbana',
    estacao: 'Março a Julho (72% do anual)',
    resumo: 'Na foz, a umidade vinda do Oceano Atlântico eleva o volume anual para 1.450 mm, mantendo o rio perene e alimentando o ecossistema de manguezal.'
  }
};

// =========================================================
// CONTROLE DE SELEÇÃO E ATUALIZAÇÃO DA TELA
// =========================================================
const pinos = document.querySelectorAll('.pino-regiao');
const pills = document.querySelectorAll('.pill-cidade');
const contadorEl = document.getElementById('contador-regioes');

// Guarda quais regiões o visitante já clicou
const regioesVisitadas = new Set(['natal']);

function renderizarGraficoMensal(valores, mesesPico) {
  const containerBarras = document.getElementById('grafico-barras');
  const maxValor = 260; // Referência máxima (abril em Natal) para proporção visual
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

  // Atualiza pinos sobre o mapa e botões de atalho
  pinos.forEach((pino) => {
    pino.classList.toggle('ativo', pino.dataset.regiao === chave);
  });

  pills.forEach((pill) => {
    pill.classList.toggle('ativa', pill.dataset.regiao === chave);
  });

  // Atualiza contador de regiões exploradas
  regioesVisitadas.add(chave);
  contadorEl.textContent = `${regioesVisitadas.size}/4 REGIÕES`;

  // Atualiza textos e indicadores do painel
  document.getElementById('regiao-trecho').textContent = dados.trecho;
  document.getElementById('regiao-nome').textContent = dados.nome;

  const badgeRegime = document.getElementById('regiao-regime');
  badgeRegime.textContent = dados.regime;
  badgeRegime.className = `badge-regime ${dados.tipoRegime}`;

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

// Eventos de clique nos pinos do mapa
pinos.forEach((pino) => {
  pino.addEventListener('click', () => {
    atualizarRegiao(pino.dataset.regiao);
  });
});

// Eventos de clique nos botões de atalho abaixo do mapa
pills.forEach((pill) => {
  pill.addEventListener('click', () => {
    atualizarRegiao(pill.dataset.regiao);
  });
});

// Inicializa com Natal selecionada
atualizarRegiao('natal');