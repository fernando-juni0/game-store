//-------------importes------------
const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session')
const path = require('path');
const multer = require('multer')
const dados = require("./DataBase/dados.js");

//------------Configs--------------
const app = express();


require('dotenv').config()


app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}))


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('public', path.join(__dirname, '/public'))
app.set('view engine', 'ejs');




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname +'/uploads/')
    },
    filename: function (req, file, cb) {
        const nomeArquivo = file.originalname
        
        // Indica o novo nome do arquivo:
        cb(null, `${nomeArquivo}`)
    }
});

const upload = multer({ storage });




//----------------POST--------------------






//-----------------GET--------------------
app.get('/',(req,res)=>{
    res.render('index')
})


















const port = process.env.PORT || 80
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}` );
});