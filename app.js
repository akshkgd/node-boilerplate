const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1>')
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})