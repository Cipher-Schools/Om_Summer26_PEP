const child = document.querySelector('#child');
const grandParent = document.querySelector('#grandParent');
const parent = document.querySelector('#parent');
const body = document.querySelector('body');

child.addEventListener('click', () => {
    console.log('Child - event capturing');
}, true)

child.addEventListener('click', () => {
    console.log('Child  - event bubbling');
})

grandParent.addEventListener('click', () => {
    console.log('grandParent - event capturing');
}, true)

grandParent.addEventListener('click', () => {
    console.log('grandParent  - event bubbling');
})

parent.addEventListener('click', () => {
    console.log('Parent - event capturing');
}, true)

parent.addEventListener('click', () => {
    console.log('Parent  - event bubbling');
})

body.addEventListener('click', () => {
    console.log('body - event bubbling')
})

body.addEventListener('click', () => {
    console.log('body - event capturing')
}, true)