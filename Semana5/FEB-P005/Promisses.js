function buscarNoticias() {
    const chaveApi = '183be9fc0a1b4ab4b31c6052463efbac';
    const noticias = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=183be9fc0a1b4ab4b31c6052463efbac';
    const params = {
        pais: 'br',
        categoria: 'education',
        chaveApi: chaveApi,
    };

    const url = new URL(noticias);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const noticiasDiv = document.getElementById('conteudo-noticias');
            noticiasDiv.innerHTML = ''; 

            data.articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
                noticiasDiv.appendChild(articleDiv);
            });
        })
        .catch(error => console.error('Erro ao buscar notícias:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    buscarNoticias();
});