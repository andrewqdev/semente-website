// =========================================================
// DADOS PLUVIOMÉTRICOS CONSOLIDADOS DA BACIA DO RIO POTENGI
// =========================================================
const estacoesPotengi = {
  'cerro-cora': {
    nome: 'Cerro Corá',
    trecho: 'Alto Curso (Nascente)',
    anual: 600,
    chuvoso: 490, // Acumulado Fev–Jul (82%)
    seco: 110,    // Acumulado Ago–Jan (18%)
    mesPico: 'Abr (125 mm)',
    regimeTexto: 'Intermitente',
    tipoRegime: 'intermitente',
    fatorClimatico: 'clima semiárido e relevo cristalino no interior'
  },
  'sp-potengi': {
    nome: 'S. P. do Potengi',
    trecho: 'Médio Curso (Agreste)',
    anual: 760,
    chuvoso: 608, // Acumulado Fev–Jul (80%)
    seco: 152,    // Acumulado Ago–Jan (20%)
    mesPico: 'Abr (150 mm)',
    regimeTexto: 'Intermitente',
    tipoRegime: 'intermitente',
    fatorClimatico: 'transição entre o semiárido e o agreste potiguar'
  },
  'macaiba': {
    nome: 'Macaíba',
    trecho: 'Baixo-Médio Curso',
    anual: 1180,
    chuvoso: 935, // Acumulado Fev–Jul (79%)
    seco: 245,    // Acumulado Ago–Jan (21%)
    mesPico: 'Abr (215 mm)',
    regimeTexto: 'Perene',
    tipoRegime: 'perene',
    fatorClimatico: 'maior influência dos ventos úmidos vindos do litoral'
  },
  'natal': {
    nome: 'Natal',
    trecho: 'Baixo Curso (Foz)',
    anual: 1450,
    chuvoso: 1165, // Acumulado Fev–Jul (80%)
    seco: 285,     // Acumulado Ago–Jan (20%)
    mesPico: 'Abr (260 mm)',
    regimeTexto: 'Perene',
    tipoRegime: 'perene',
    fatorClimatico: 'umidade oceânica constante na faixa costeira'
  }
};

const MAXIMO_BACIA = 1450;

// =========================================================
// 1. COMPARADOR LADO A LADO (REGIÃO A VS. REGIÃO B)
// =========================================================
const selectA = document.getElementById('select-regiao-a');
const selectB = document.getElementById('select-regiao-b');

function formatarNumero(valor) {
  return valor.toLocaleString('pt-BR');
}

function atualizarComparador() {
  const regiaoA = estacoesPotengi[selectA.value];
  const regiaoB = estacoesPotengi[selectB.value];
  if (!regiaoA || !regiaoB) return;

  document.getElementById('comp-nome-a').textContent = regiaoA.nome;
  document.getElementById('comp-valor-a').textContent = `${formatarNumero(regiaoA.anual)} mm/ano`;
  document.getElementById('comp-barra-a').style.width = `${(regiaoA.anual / MAXIMO_BACIA) * 100}%`;

  document.getElementById('comp-nome-b').textContent = regiaoB.nome;
  document.getElementById('comp-valor-b').textContent = `${formatarNumero(regiaoB.anual)} mm/ano`;
  document.getElementById('comp-barra-b').style.width = `${(regiaoB.anual / MAXIMO_BACIA) * 100}%`;

  const diffMmEl = document.getElementById('comp-diferenca-mm');
  const diffPctEl = document.getElementById('comp-diferenca-pct');
  const analiseEl = document.getElementById('comp-texto-analise');

  if (regiaoA.nome === regiaoB.nome) {
    diffMmEl.textContent = '0 mm/ano';
    diffPctEl.textContent = 'Mesma região';
    analiseEl.textContent = `Você selecionou ${regiaoA.nome} nos dois campos. Escolha cidades diferentes para comparar o gradiente da bacia.`;
    return;
  }

  const maior = regiaoB.anual >= regiaoA.anual ? regiaoB : regiaoA;
  const menor = regiaoB.anual >= regiaoA.anual ? regiaoA : regiaoB;
  const diferenca = maior.anual - menor.anual;
  const percentual = Math.round((diferenca / menor.anual) * 100);

  diffMmEl.textContent = `+${formatarNumero(diferenca)} mm/ano`;
  diffPctEl.textContent = `+${percentual}% de chuva`;
  analiseEl.textContent = `${maior.nome} acumula ${formatarNumero(diferenca)} mm a mais por ano do que ${menor.nome}, reflexo direto de ${maior.fatorClimatico}.`;
}

selectA.addEventListener('change', atualizarComparador);
selectB.addEventListener('change', atualizarComparador);

// =========================================================
// 2. SAZONALIDADE (ANO TODO / QUADRA CHUVOSA / ESTIAGEM)
// =========================================================
const abasPeriodo = document.querySelectorAll('.aba-periodo');
const containerSazonal = document.getElementById('lista-barras-sazonais');

function renderizarSazonalidade(periodo = 'anual') {
  containerSazonal.innerHTML = '';

  const referenciasMax = {
    anual: 1450,
    chuvoso: 1165,
    seco: 285
  };

  const teto = referenciasMax[periodo] || 1450;

  Object.values(estacoesPotengi).forEach((estacao) => {
    const valor = estacao[periodo];
    const porcentagem = Math.max((valor / teto) * 100, 10);

    const item = document.createElement('div');
    item.className = 'item-sazonal';

    const classeCor = periodo === 'seco' ? 'barra-sazonal-fill modo-seco' : 'barra-sazonal-fill';

    item.innerHTML = `
      <div class="item-sazonal-topo">
        <span class="item-sazonal-nome">${estacao.nome}</span>
        <span class="item-sazonal-valor">${formatarNumero(valor)} mm</span>
      </div>
      <div class="trilha-sazonal">
        <div class="${classeCor}" style="width: ${porcentagem}%;"></div>
      </div>
    `;

    containerSazonal.appendChild(item);
  });
}

abasPeriodo.forEach((aba) => {
  aba.addEventListener('click', () => {
    abasPeriodo.forEach((btn) => btn.classList.remove('ativa'));
    aba.classList.add('ativa');
    renderizarSazonalidade(aba.dataset.periodo);
  });
});

// =========================================================
// 3. TABELA TÉCNICA FILTRÁVEL POR REGIME
// =========================================================
const corpoTabela = document.getElementById('corpo-tabela-dados');
const filtrosRegime = document.querySelectorAll('.filtro-btn');

function renderizarTabela(filtro = 'todos') {
  corpoTabela.innerHTML = '';

  const listaFiltrada = Object.values(estacoesPotengi).filter((estacao) => {
    if (filtro === 'todos') return true;
    return estacao.tipoRegime === filtro;
  });

  listaFiltrada.forEach((estacao) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <span class="td-cidade">${estacao.nome}</span>
        <span class="td-trecho">${estacao.trecho}</span>
      </td>
      <td class="td-mono">${formatarNumero(estacao.anual)} mm</td>
      <td class="td-mono">${estacao.mesPico}</td>
      <td>
        <span class="tag-regime ${estacao.tipoRegime}">${estacao.regimeTexto}</span>
      </td>
    `;
    corpoTabela.appendChild(tr);
  });
}

filtrosRegime.forEach((btn) => {
  btn.addEventListener('click', () => {
    filtrosRegime.forEach((item) => item.classList.remove('ativo'));
    btn.classList.add('ativo');
    renderizarTabela(btn.dataset.filtro);
  });
});

// Inicializa os três componentes ao carregar a página
atualizarComparador();
renderizarSazonalidade('anual');
renderizarTabela('todos');