
function buscarPiada() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao obter a piada de Chuck Norris");
        }
        return response.json();
    })
    .then(data => {
        const piada = data.value;
        const resultado = document.querySelector('.inferior div');
        resultado.innerText = piada;
    })
    .catch(error => {
        console.error(error);
    });
}