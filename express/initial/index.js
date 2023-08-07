const express = require('express');
const students = require('./students')

const app = express();
const port = '3000';

app.get('/', (req, res)=>{
    res.send('<h1>Welcome</h1>')
});

app.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const found = students.find((student) => {
        return student.id === id;
    });
    if(found) {
        res.send(`
            <center>
                <h1>${found.id}</h1>
                <h1>${found.name}</h1>
                <h1>${found.email}</h1>
                <h1>${found.contactno}</h1>
            </center>
        `);
    } else {
        res.send('<h1>Error, Student not Found</h1>');
    }
});

app.listen(port);
