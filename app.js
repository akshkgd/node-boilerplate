const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const users = []
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('home')
})

app.post('/enroll', (req,res)=>{
    let tempUser = {
        name: req.body.name,
    }
    users.push(tempUser);
    console.log(users);
    res.redirect('/users');
})
app.get('/users', (req,res)=>{
    res.render('users', {students: users})
})
app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})