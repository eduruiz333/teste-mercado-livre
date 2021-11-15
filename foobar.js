(() => {
  const items = 60,
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

  let listData = result,
    list = document.querySelector('.list'),
    listItem

  for (let i = 0; i < result.length; ++i) {
    listItem = document.createElement('li')
    listItem.innerHTML = listData[i]
    list.appendChild(listItem)
  }

})()