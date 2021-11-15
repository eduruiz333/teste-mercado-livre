const items = 30
const foo = 'foo'
const bar = 'bar'
const foobar = foo + bar
const result = []

let print = document.querySelector('.print')

function contador() {
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
  
  print.innerHTML = result
  
  

}
contador()

function makeList() {
  let listData = result,
  // Make a container element for the list
  listContainer = document.createElement('div'),
  // Make the list
  listElement = document.createElement('ul'),
  // Set up a loop that goes through the items in listItems one at a time
  numberOfListItems = listData.length,
  listItem,
  i;

  // Add it to the page
  document.getElementsByTagName('body')[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {
      // create an item for each one
      listItem = document.createElement('li');

      // Add the item text
      listItem.innerHTML = listData[i];

      // Add listItem to the listElement
      listElement.appendChild(listItem);
  }
}

// Usage
makeList();




/* 
COM FUNÇÃO ANÔNIMA 

(() => {
    const items = 60
    const foo = 'foo'
    const bar = 'bar'
    const foobar = foo + bar
    const result = []
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
    console.log(result)
}) ()

*/