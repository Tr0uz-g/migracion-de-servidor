const express = require('express');
const PORT = 3000;
const app = express();
const data = require('./task.json');
app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/main.html');
})

app.get('/dataTask', (req, res)=>{
    res.json(data);
})

app.listen(PORT, ()=>{
    console.log(`Server escuchando en http://localhost${PORT}`)
})