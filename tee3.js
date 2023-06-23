alert("Você sabe onde esta?")
alert("...")

// Exibe a tela de espera
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
  }
  
  // Oculta a tela de espera
  function hideLoading() {
    document.getElementById('loading').style.display = 'none';
  }
  
  // Defina o tempo de espera em milissegundos (por exemplo, 3 segundos = 3000)
  var tempoEspera = 3000;
  
  // Exemplo de uso
  showLoading();
  
  // Aguarda o tempo de espera e, em seguida, oculta a tela de espera
  setTimeout(function() {
    hideLoading();
  }, tempoEspera);
  

