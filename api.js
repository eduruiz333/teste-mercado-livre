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

            for (let i = 0; i <= items; i++) {
                resultArray.push(productTitle[i].title)
            }

            for (let i = 1; i < resultArray.length; ++i) {

                if (i % 3 === 0 && i % 5 === 0) {
                    listItem = document.createElement('li')
                    listItem.innerHTML = listData[i]
                    list.appendChild(listItem).classList.add('orange')
                } else if (i % 5 === 0) {
                    listItem = document.createElement('li')
                    listItem.innerHTML = listData[i]
                    list.appendChild(listItem).classList.add('red')
                } else if (i % 3 === 0) {
                    listItem = document.createElement('li')
                    listItem.innerHTML = listData[i]
                    list.appendChild(listItem).classList.add('yellow')
                } else {
                    listItem = document.createElement('li')
                    listItem.innerHTML = listData[i]
                    list.appendChild(listItem).classList.add('grey')
                }
            }

        })

})()