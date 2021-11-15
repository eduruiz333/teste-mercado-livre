(() => {

    const URL = fetch('https://api.mercadolibre.com/sites/MLA/search?q=cards')
    URL
        .then(apiResp => apiResp.json())
        .then(apiResp => {
            productTitle = apiResp.results

            const items = 15,
                resultArray = []

            let listData = resultArray,
                list = document.querySelector('.list'),
                listItem

            //ALIMENTA O ARRAY COM A QUANTIDADE DE ITENS DESEJADO
            for (let i = 0; i <= items; i++) {
                resultArray.push(productTitle[i].title)
            }

            //UTILIZA OS DADOS DO ARRAY PARA POPULAR A LISTA, IMPLEMENTANDO AS REGRAS DE CSS PARA MÚLTIPLOS DE 3, 5, 3 E 5
            for (let i = 1; i < resultArray.length; ++i) {

                if (i % 3 === 0 && i % 5 === 0) {
                    listItem = document.createElement('li')
                    listItem.innerHTML = listData[i]
                    list.appendChild(listItem).classList.add('prod', 'orange')
                } else if (i % 5 === 0) {
                    listItem = document.createElement('li')
                    listItem.innerHTML = listData[i]
                    list.appendChild(listItem).classList.add('prod', 'red')
                } else if (i % 3 === 0) {
                    listItem = document.createElement('li')
                    listItem.innerHTML = listData[i]
                    list.appendChild(listItem).classList.add('prod', 'yellow')
                } else {
                    listItem = document.createElement('li')
                    listItem.innerHTML = listData[i]
                    list.appendChild(listItem).classList.add('prod', 'grey')
                }
            }

            // ADICIONA ESTILO PARA MARCAR ITEM SELECIONADO
            const content = document.querySelector('.content');
            const lista = content.getElementsByClassName('prod');
            for (let i = 0; i < lista.length; i++) {
                lista[i].addEventListener("click", function () {
                    const current = document.getElementsByClassName("active");
                    if (current.length > 0) {
                        current[0].className = current[0].className.replace(" active", "");
                    }
                    this.className += " active";
                });
            }
        })
})()