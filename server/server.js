const express = require('express');
const userRouter = require("./user")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();

app.get('/',(req,res) => {
    res.send('<h1>这是聊天App后台入口</h1>')
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user',userRouter);

app.listen(9003,() => {
    console.log('app is starting at 9003 port!');
});




