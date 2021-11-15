(() => {

    const URL = fetch('https://api.mercadolibre.com/sites/MLA/search?q=cards')
    URL
      .then(apiResp => apiResp.json())
      .then(apiResp => {
        agoravai = apiResp.results
        console.log(agoravai)
  
        for (let i = 0; i <= 15; i++) {
          console.log(agoravai[i].title)
        }
  
  
        const items = 15,
          result = [],
          foo = 'foo',
          bar = 'bar',
          foobar = foo + bar
  
        for (let i = 1; i <= items; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
            result.push(agoravai[i].title)
            // result.push(foobar)
            //Aplicar CSS AMARELO
          } else if (i % 5 === 0) {
            result.push(agoravai[i].title)
            // result.push(bar)
            //Aplicar CSS VERMELHO
          } else if (i % 3 === 0) {
            result.push(agoravai[i].title)
            // result.push(foo)
            //Aplicar CSS LARANJA
          } else {
            result.push(agoravai[i].title)
            // result.push(i)
            //Aplicar CSS CINZA
          }
        }
  
  
        for (let i = 0; i < result.length; ++i) {
          let listData = result,
            list = document.querySelector('.list'),
            listItem
  
          listItem = document.createElement('li')
          listItem.innerHTML = listData[i]
          list.appendChild(listItem)
        }
  
      })
  
  })()