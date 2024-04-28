
function buscarPiada() {
    // Faz uma solicitação GET para a API do Chuck Norris
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => {
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error("Erro ao obter a piada de Chuck Norris");
        }
        return response.json();
    })
    // Manipula os dados JSON retornados
    .then(data => {
        const piada = data.value;
        // Seleciona aonde a piada será exibida
        const resultado = document.querySelector('.inferior div');
        resultado.innerText = piada;
    })
    //Captura possíveis erros durante o processo
    .catch(error => {
        console.error(error);
    });
}