const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res) => {
    res.send('<h1>hello,shijie</h1>')
});

app.listen(9003,() => {
    console.log('app is starting at 9003 port!');
});


//连接mongodb,创建库(集合)imooc，没有的话会自动新建
const DB_URL = 'mongodb://localhost:27017/fullstack';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongodb connect success');
});

//类似于mysql的表 mongo里的文档、字段的概念,就是创建User这张表
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//新增数据
app.get('/add', (req,res) => {
    User.create({
        user:'jack',
        age:26
    }, (err,doc) => {
        if(!err){
            res.json(doc);
        }else{
            res.send(err);
        }
    });
});

// 查找全部数据
app.get('/data', (req,res) => {
    User.find({}, (err,doc) => {
        res.json(doc);
    })
});

// 查找一条数据
app.get('/find',(req,res) => {
    User.find({user:'xiao'},(err,doc) => {
        if(err){
            res.send(err);
        }else{
            res.json(doc);
        }
    })
})

// 删除数据
app.get('/remove',(req,res) => {
    User.remove({user:'jack'},(err,doc) => {
        res.json(doc);
    });
})

// 更新数据
app.get('/update',(req,res) => {
    User.update({user:'jack'},{user:'dave'},(err,doc) => {
        res.json(doc);
    })
})