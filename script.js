document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loading');
    setTimeout(function() {
        document.body.classList.remove('loading');
    }, 1000); 
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const isExternal = this.target === '_blank' || 
                             this.hostname !== window.location.hostname ||
                             href.startsWith('http') ||
                             href.startsWith('mailto:') ||
                             href.startsWith('tel:');
            if (!isExternal) {
                e.preventDefault();
                document.body.classList.add('loading');

                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
});
// Funções dos algoritmos
function somar(a, b) { return a + b; }
function ehPar(num) { return num % 2 === 0; }

// Funções para demonstrar
function calcularSoma() {
  const a = Number(document.getElementById('num1').value);
  const b = Number(document.getElementById('num2').value);
  document.getElementById('resultadoSoma').textContent = somar(a, b);
}

function verificarPar() {
  const num = Number(document.getElementById('numeroPar').value);
  const resultado = ehPar(num) ? "É PAR" : "É ÍMPAR";
  document.getElementById('resultadoPar').textContent = resultado;
}
