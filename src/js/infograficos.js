// =========================================================
// 1. INFOGRÁFICO 01: CICLO HIDROLÓGICO DA BACIA (SVG)
// =========================================================
const dadosEtapasCiclo = {
  1: {
    titulo: '1. Evaporação Oceânica e Ventos Alísios',
    tag: 'ORIGEM DA UMIDADE',
    descricao: 'O calor tropical evapora a água do Oceano Atlântico e os ventos alísios empurram massas úmidas diretamente para a costa leste do Rio Grande do Norte.',
    gruposAtivos: ['svg-etapa-1']
  },
  2: {
    titulo: '2. Precipitação Intensa no Litoral',
    tag: '1.450 MM/ANO • NATAL',
    descricao: 'Ao encontrar a faixa costeira de Natal e Macaíba, a umidade condensa rapidamente, gerando chuvas abundantes entre março e julho.',
    gruposAtivos: ['svg-etapa-1', 'svg-etapa-2']
  },
  3: {
    titulo: '3. Redução de Umidade no Semiárido',
    tag: '600 MM/ANO • CERRO CORÁ',
    descricao: 'À medida que as nuvens avançam para o interior até a Serra de Santana, perdem umidade — explicando por que chove 2,4x menos na nascente.',
    gruposAtivos: ['svg-etapa-1', 'svg-etapa-3']
  },
  4: {
    titulo: '4. Escoamento, Barragem e Estuário',
    tag: '176 KM DE PERCURSO',
    descricao: 'A água escoa da serra ao mar, é armazenada na Barragem Campo Grande no médio curso e deságua perene no manguezal de Natal.',
    gruposAtivos: ['svg-etapa-2', 'svg-etapa-3', 'svg-etapa-4']
  }
};

const botoesEtapa = document.querySelectorAll('.btn-etapa');
const todosGruposSvg = document.querySelectorAll('.grupo-svg');

function selecionarEtapaCiclo(numero) {
  const info = dadosEtapasCiclo[numero];
  if (!info) return;

  botoesEtapa.forEach((btn) => {
    btn.classList.toggle('ativa', btn.dataset.etapa === String(numero));
  });

  todosGruposSvg.forEach((grupo) => {
    grupo.classList.toggle('ativo', info.gruposAtivos.includes(grupo.id));
  });

  document.getElementById('etapa-titulo').textContent = info.titulo;
  document.getElementById('etapa-tag').textContent = info.tag;
  document.getElementById('etapa-descricao').textContent = info.descricao;
}

botoesEtapa.forEach((btn) => {
  btn.addEventListener('click', () => {
    selecionarEtapaCiclo(btn.dataset.etapa);
  });
});

// =========================================================
// 2. INFOGRÁFICO 02: IMPACTO DA CHUVA NO SOLO
// =========================================================
const cenariosSolo = {
  natural: {
    infiltracao: 55,
    evapo: 30,
    escoamento: 15,
    labelInfiltracao: '55% (Recarga)',
    labelEvapo: '30% (Evapotransp.)',
    labelEscoamento: '15% (Controlado)',
    classeAlerta: 'seguro',
    tituloAlerta: 'Equilíbrio Hidrológico Preservado',
    textoAlerta: 'As raízes do manguezal e da mata ciliar funcionam como esponjas naturais, filtrando sedimentos e abastecendo os aquíferos subterrâneos.'
  },
  agricola: {
    infiltracao: 35,
    evapo: 25,
    escoamento: 40,
    labelInfiltracao: '35% (Moderada)',
    labelEvapo: '25% (Vegetação)',
    labelEscoamento: '40% (Erosão leve)',
    classeAlerta: 'alerta',
    tituloAlerta: 'Atenção ao Assoreamento do Leito',
    textoAlerta: 'Sem mata ciliar protegendo as margens no médio curso, a enxurrada carrega solo fértil para dentro do rio e reduz a capacidade dos açudes.'
  },
  urbano: {
    infiltracao: 10,
    evapo: 10,
    escoamento: 80,
    labelInfiltracao: '10% (Bloqueada)',
    labelEvapo: '10% (Mínima)',
    labelEscoamento: '80% (Enxurrada)',
    classeAlerta: 'perigo',
    tituloAlerta: 'Risco Elevado de Alagamentos',
    textoAlerta: 'Em áreas densamente asfaltadas de Natal e Macaíba, quase toda a chuva escoa de uma só vez para a drenagem urbana e para o estuário.'
  }
};

const abasSolo = document.querySelectorAll('.aba-solo');

function selecionarCenarioSolo(chave) {
  const dados = cenariosSolo[chave];
  if (!dados) return;

  abasSolo.forEach((aba) => {
    aba.classList.toggle('ativa', aba.dataset.solo === chave);
  });

  document.getElementById('fatia-infiltracao').style.width = `${dados.infiltracao}%`;
  document.getElementById('fatia-evapo').style.width = `${dados.evapo}%`;
  document.getElementById('fatia-escoamento').style.width = `${dados.escoamento}%`;

  document.getElementById('valor-infiltracao').textContent = dados.labelInfiltracao;
  document.getElementById('valor-evapo').textContent = dados.labelEvapo;
  document.getElementById('valor-escoamento').textContent = dados.labelEscoamento;

  const boxAlerta = document.getElementById('alerta-solo');
  boxAlerta.className = `box-consequencia ${dados.classeAlerta}`;
  document.getElementById('solo-status-titulo').textContent = dados.tituloAlerta;
  document.getElementById('solo-status-texto').textContent = dados.textoAlerta;
}

abasSolo.forEach((aba) => {
  aba.addEventListener('click', () => {
    selecionarCenarioSolo(aba.dataset.solo);
  });
});

// Inicializa ambos os infográficos interativos
selecionarEtapaCiclo(1);
selecionarCenarioSolo('natural');