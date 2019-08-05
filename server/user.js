const express = require('express');
const Router = express.Router();
const model = require('./module')
const Users = model.getModel('users');

// 关于user路由的中间件
Router.get('/info',(req,res) => {
    return res.json({code:1})
})

Router.get('/list',(req,res) => {
    Users.find({},(err,doc) => {
        return res.json(doc)
    })
})

Router.post('/register',(req,res) => {
    const {user,pwd,type} = req.body;
    Users.findOne({user},(err,doc) =>{
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        Users.create({user,pwd,type},(err,doc) =>{
            if(err){
                return res.json({code:1,msg:'用户名重复'})
            }
            return res.json({code:0})
        })
    })
})

module.exports = Router