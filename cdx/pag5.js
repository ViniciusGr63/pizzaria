function fazerPedido() {
    var pizza = document.getElementById('pizza').value;
    var bebida = document.getElementById('bebida').value;
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var telefone = document.getElementById('telefone').value;

    var valorPizza = 30;
    var valorBebida = 8;

    var total = valorPizza + valorBebida;

    var mensagem = "Obrigado, " + nome + "! Seu pedido de uma pizza de " + pizza + " e a opção de bebida: " + bebida + " foi recebido. O valor total é de R$" + total + ". Seu pedido será entregue em 30 minutos no seguinte endereço: " + endereco + ". Entraremos em contato pelo telefone: " + telefone + ".";

    document.getElementById('pedido').innerHTML = mensagem;
  }
  
  function limparDados() {
    document.getElementById('pizza').value = "";
    document.getElementById('bebida').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('endereco').value = "";
    document.getElementById('telefone').value = "";
    
    document.getElementById('pedido').innerHTML = "";
  }