// Função de animação de fade-in
function fadeIn(element, duration) {
    var op = 0;  // Opacidade inicial
    var interval = 10; // Intervalo de tempo entre os quadros da animação (em milissegundos)
    var step = 1 / (duration / interval); // Quantidade de opacidade a ser adicionada em cada quadro
  
    // Animação de fade-in usando setInterval
    var fadeInterval = setInterval(function () {
      op += step;
      element.style.opacity = op;
  
      if (op >= 1) {
        clearInterval(fadeInterval); // Parar a animação quando a opacidade for 1 (completa)
      }
    }, interval);
  }
  
  // Evento disparado quando o conteúdo da página é totalmente carregado
  window.addEventListener('load', function () {
    var header = document.querySelector('header'); // Selecionar o elemento do cabeçalho
    fadeIn(header, 1000); // Chamar a função de animação de fade-in com uma duração de 1000ms (1 segundo)
});
  
// Função para animar o texto em loop infinito
function animateText() {
    const textElements = document.querySelectorAll('.animacao-texto');
    let currentText = 0;

    setInterval(() => {
        textElements[currentText].style.opacity = 0;
        currentText = (currentText + 1) % textElements.length;
        textElements[currentText].style.opacity = 1;
    }, 3000); // Tempo de exibição de cada texto em milissegundos (3 segundos)
}
  
  // Evento disparado quando o conteúdo da página é totalmente carregado
window.addEventListener('load', function () {
    animateText(); // Chama a função para iniciar a animação de texto em loop infinito
});