const postSection = document.querySelector('#posts');
const btn1 = document.querySelector('#btn1');

const h2 = document.createElement('h2');
h2.innerText = 'Posts';

const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');

    const todos = await data.json();
    console.log(todos);
}

btn1.addEventListener('click', fetchData);



// ** Complete this add all data into DOM using DOM manipulation. **
//  Add styles in styles.css and make it look good by creating cards or your own styling.

