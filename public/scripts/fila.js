/* document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault();
   
        // Obtém os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = document.getElementById('email').value;
        const endereco = document.getElementById('endereco').value;
        const nascimento = document.getElementById('nascimento').value;
        const pagamento = document.getElementById('pagamento').value;
        const total = localStorage.getItem('total');

        const deParaPag = {
            cartao: "Cartão",
            dinheiro: "Dinheiro",
            pix: "Pix",
            vr: "Vale Refeição"
        }

        // Cria um objeto JSON com os dados
        const dados = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            endereco: endereco,
            nascimento: nascimento,
            pagamento: deParaPag[pagamento],
            total: total
        };

        // Converte o objeto JSON em uma string
        const dadosString = JSON.stringify(dados);

        // Armazena os dados na sessionStorage
        localStorage.setItem('usuario', dadosString);

        // Redireciona para a página mostraDados.html
        window.location.href = 'entregas';
        
  });
}); */
        const dadosString = localStorage.getItem('dadosDoUsuario');
        const total = localStorage.getItem('total');
        
        
        // Exibe os dados na página
        if (dadosString && total) {
            const data = JSON.parse(dadosString);
            const divDados = document.getElementById('divDados');

            divDados.innerHTML = `
                <p>Olá <strong>${data.nome} ${data.sobrenome}</strong>, agradecemos o seu pedido.</p> <br>
                <p>Ele será entregue no endereço <strong>${data.endereco}</strong></p>
                <p>No valor de R$ <strong>${total}</strong> com a forma de pagamento em <strong>${data.pagamento}</strong></p>
            `;
        }

        function confirmarPedido() {
            localStorage.setItem("dataPedido", new Date().toLocaleString())
            window.location.href = 'fila'
        }