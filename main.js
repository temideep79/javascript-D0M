
// //get element bytagname

// const ListItem = document.getElementsByTagName('li')
// ListItem[0].style.color = 'red'


// const betterItems = [...ListItem]
// betterItems.forEach((item)=>{
//   console.log(item)
// })

//console.log(betterItems)
//console.log(ListItem)

// const headings = document.getElementsByTagName('h2')
// headings[0].style.color = 'green'


//get elementby class

// const newItem = document.getElementsByClassName('special')
// newItem[2].style.color = 'blue'
// //console.log(newItem)

//queryselector selects a single element

// const result = document.querySelector('#result')

// result.style.backgroundColor = ' blue'
// //console.log(result)


// const item = document.querySelector('.special')

// const lastItem = document.querySelector('li:last-child')

// lastItem.style.color = 'yellow'
//console.log(lastItem)

//query selectorAll allows you to use the array method selects mutiple elements

// const list = document.querySelectorAll('.special')


// list.forEach((it)=>{
//   it.style.color = 'orange'
//   it.style.backgroundColor = 'yellow'
//   console.log(it)
// })

//


//select children elements
//childnodes return all childnodes including white space which is treated as a text node
//there are times you want to navigate the dom without using methods 


//select the childrten with childnode
//const result = document.querySelector('#result')


//childnodes example-varaiable.childnodes


//const allChildren = result.childNodes;
//console.log(allChildren);
//console.log(result);


//selecting the children directly with 'children' will select all the children-first child and last child

//children example-variable.children 
// const myChildren = result.children[1];
// myChildren.style.color = 'red'
// console.log(myChildren);

//console.log(result.firstChild);
//console.log(result.lastChild);




// selecting the parent element-parentElement selects until it runs out of selection in the document chain by selecting all parent element-----run twice

// const heading2 =  document.querySelector('h2')

// const firstParentSel = heading2.parentElement
// firstParentSel.style.color = 'red'
// console.log(firstParentSel)
//selecting immediate parent the second div
//console.log(heading2.parentElement.parentElement);



//previous sibling properties
//next sibling 
//returns whitespace

// first element nextSibling -run twice
const first = document.querySelector('.first');
//iniitally you will get a whitespace .repeat will select the next item on the list-make sure u run 2wice 
const secondWhitespace = first.nextSibling
const secondNextSibling = first.nextSibling.nextSibling.style.color = 'red'
console.log(secondWhitespace)
console.log(secondNextSibling)

//onsole.log(first)


//last element -prviousSibling selection run twice 

const last = document.querySelector('#last')
const lastChildSelector = last.previousSibling.previousSibling.style.color = 'green';

console.log(last)
console.log(lastChildSelector)
