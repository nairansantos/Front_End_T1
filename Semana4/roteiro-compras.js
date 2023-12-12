// Capturando botão "Comprar"
const comprarBtn = document.querySelector('.roteiro-comprar')

// Adicionando evento de clique
comprarBtn.addEventListener('click', () => {
  // Capturando informações do pacote turístico
  const destino = document.querySelector('.destino-input').value
  const preco = document.querySelector('.preco-input').value
  const observacoes = document.querySelector('.observacoes-input').value

  // Criando objeto JSON
  const pacoteTuristico = {
    destino: destino,
    preco: preco,
    observacoes: observacoes
  }

  // Imprimindo o objeto JSON no console
  console.log(pacoteTuristico)
})
