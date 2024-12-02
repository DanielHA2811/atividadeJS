// Faça o exercício da GALERIA de IMAGENS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-front-end/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    '01-philae-parts.jpg',
    '02-philae-rosetta.jpg',
    '03-philae-separation.jpg',
    '04-philae-67-picture.jpg',
    '05-philae-collecting.jpg'
  ];

let indiceDaFotoAtual = 0;
let imagemEl = document.querySelector('#slide');
let anteriorEl = document.querySelector('#anterior');
let proximoEl = document.querySelector('#proximo');
function action(el) {
  indiceDaFotoAtual = indiceDaFotoAtual + el;
  if (indiceDaFotoAtual < 0) {
    indiceDaFotoAtual = 4;
  }
  else if (indiceDaFotoAtual > 4) {
    indiceDaFotoAtual = 0;
  }
  imagemEl.src = 'http://fegemo.github.io/cefet-front-end/images/01-philae-parts.jpg' + nomesDasImagens[indiceDaFotoAtual];
}

proximoEl.addEventListener('click', () => action(1));
anteriorEl.addEventListener('click', () => action(-1));




