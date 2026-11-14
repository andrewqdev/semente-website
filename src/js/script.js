// =========================================================
// 1. INTERATIVIDADE DO DESAFIO RÁPIDO
// =========================================================
// =========================================================
// 1. INTERATIVIDADE DO DESAFIO RÁPIDO + BARRA DE XP
// =========================================================
const cardDesafio = document.querySelector('.card-desafio');
const botoesOpcao = document.querySelectorAll('.btn-opcao');
const badgeDesafio = document.querySelector('.badge-desafio');

const xpHud = document.getElementById('xp-hud');
const xpTexto = document.getElementById('xp-texto');
const xpBarra = document.getElementById('xp-barra');

const XP_MAXIMO = 10;
let xpAtual = 0;

function atualizarBarraXP(pontosGanhos) {
  xpAtual = Math.min(xpAtual + pontosGanhos, XP_MAXIMO);
  const porcentagem = (xpAtual / XP_MAXIMO) * 100;

  xpTexto.textContent = `${xpAtual} / ${XP_MAXIMO} XP`;
  xpBarra.style.width = `${porcentagem}%`;

  if (pontosGanhos > 0) {
    xpHud.classList.add('ganhou');
  }
}

if (cardDesafio && botoesOpcao.length > 0) {
  botoesOpcao.forEach((botao) => {
    botao.addEventListener('click', () => {
      if (cardDesafio.classList.contains('respondido')) return;

      const escolha = botao.textContent.trim();
      const acertou = escolha === 'Natal (Foz)';

      cardDesafio.classList.add('respondido');

      if (acertou) {
        botao.classList.add('correto');
        badgeDesafio.innerHTML = 'RESPOSTA CERTA! <span class="separador">•</span> <strong class="xp">+10 XP</strong>';
        atualizarBarraXP(10);
      } else {
        botao.classList.add('errado');
        botoesOpcao.forEach((btn) => {
          if (btn.textContent.trim() === 'Natal (Foz)') {
            btn.classList.add('correto');
          }
        });
        badgeDesafio.innerHTML = 'QUASE! É EM NATAL <span class="separador">•</span> <strong class="xp">0 XP</strong>';
      }
    });
  });
}

// =========================================================
// 2. SIMULADOR DE CHUVAS (ALTERNA ENTRE AS 3 REGIÕES)
// =========================================================
const dadosRegioes = {
  nascente: {
    volume: '600',
    percentual: '41%',
    status: 'Semiárido • Rio intermitente'
  },
  medio: {
    volume: '780',
    percentual: '54%',
    status: 'Agreste • Barragem Campo Grande'
  },
  foz: {
    volume: '1.450',
    percentual: '100%',
    status: 'Manguezal cheio • 2,4x mais chuva'
  }
};

const abasRegiao = document.querySelectorAll('.aba-regiao');
const valorChuvaEl = document.getElementById('valor-chuva');
const barraChuvaEl = document.getElementById('barra-chuva');
const statusBiomaEl = document.getElementById('status-bioma');

abasRegiao.forEach((aba) => {
  aba.addEventListener('click', () => {
    // Remove a classe ativa de todas e aplica na clicada
    abasRegiao.forEach((item) => item.classList.remove('ativa'));
    aba.classList.add('ativa');

    // Busca os dados da região correspondente e atualiza a tela
    const chave = aba.dataset.regiao;
    const info = dadosRegioes[chave];

    if (info) {
      valorChuvaEl.textContent = info.volume;
      barraChuvaEl.style.width = info.percentual;
      statusBiomaEl.textContent = info.status;
    }
  });
});