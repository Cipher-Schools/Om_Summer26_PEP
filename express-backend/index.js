const express = require('express');
// const bodyParser = require('body-parser');

const students = [
    { id:1, name: 'Tom', age: 22, city: 'Delhi' },
    { id:2, name: 'Harry', age: 25, city: 'Mumbai' },
    { id:3, name: 'John', age: 23, city: 'Jalandhar' },
    { id:4, name: 'Tom', age: 24, city: 'Mumbai'},
    { id:5, name: 'Jerry', age: 28, city: 'Delhi' },
    { id:6, name: 'Virat', age: 32, city: 'Delhi' },
]

const app = express();

app.use(express.json());
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('response from express server');
});

app.get('/students', (req, res) => {
    // res.send(students);
    res.json(students);
})

app.get('/students/:id', (req, res) => {
    const studentId = Number(req.params.id);
    // console.log(typeof(studentId));

    const student = students.find(s => s.id === studentId);
    // res.status(201);
    res.json(student);
})

app.get('/students/:name/city/:cityName', (req, res) => {
    const name = req.params.name;
    const cityName = req.params.cityName;

    const student = students.find(s => s.name === name && s.city === cityName);
    res.json(student);
})

app.get('/search', (req, res) => {
    const city = req.query.city;
    // console.log(req.query.city);

    const student = students.filter(s => s.city === city);
    res.json(student);

});

app.post('/students', (req, res) => {
    // const name = req.body.name;
    const body = req.body;
    console.log(body);
    res.send('Hello')
})


app.listen(3000, () => console.log('Server is running at port 3000'));


