(() => {

  const URL = fetch('https://api.mercadolibre.com/sites/MLA/search?q=cards')
  URL
    .then(apiResp => apiResp.json())
    .then(apiResp => {
      agoravai = apiResp.results
      console.log(agoravai)


      const items = 15,
        result = [],
        foo = 'foo',
        bar = 'bar',
        foobar = foo + bar

      for (let i = 1; i <= items; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          result.push(foobar)
        } else if (i % 5 === 0) {
          result.push(bar)
        } else if (i % 3 === 0) {
          result.push(foo)
        } else {
          result.push(i)
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