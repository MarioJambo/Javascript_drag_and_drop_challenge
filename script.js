// JavaScript
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Listeners para o elemento a ser preenchido (fill)
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Percorre as caixas vazias e adiciona os listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Funções de arraste (drag)
function dragStart(e) {
  this.className += ' hold'; // Adiciona a classe 'hold'
  setTimeout(() => {
    this.className = 'invisible'; // Adiciona a classe 'invisible' após um pequeno intervalo
  }, 0);
}

function dragEnd() {
  this.className = 'fill'; // Reseta a classe para 'fill'
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered'; // Adiciona a classe 'hovered' quando o elemento entra na área da caixa vazia
}

function dragLeave() {
  this.className = 'empty'; // Reseta a classe para 'empty' quando o elemento deixa a área da caixa vazia
}

function dragDrop() {
  this.className = 'empty'; // Reseta a classe para 'empty'
  this.appendChild(fill); // Adiciona o elemento de preenchimento à caixa vazia
}
