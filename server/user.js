const express = require('express');
const Router = express.Router();
const model = require('./module')
const Users = model.getModel('users');
const utility = require('utility')

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
    // Users.remove({},(err,doc) => {return null});
    Users.findOne({user},(err,doc) =>{
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        Users.create({user,pwd:md5Pwd(pwd),type},(err,doc) =>{
            if(err){
                return res.json({code:1,msg:'后端出问题'})
            }
            return res.json({code:0})
        })
    })
})

Router.post('/login',(req,res) => {
    const {user,pwd} = req.body;
    // Users.remove({},(err,doc) => {return null});
    Users.findOne({user,pwd:md5Pwd(pwd)},{pwd:0},(err,doc) =>{
        if(err){
            return res.json({code:1,msg:'后端出错了'});
        }
        if(!doc){
            return res.json({code:1,msg:'用户名或密码不存在'});
        }
        
        return res.json({code:0,data:doc});
        
    })
})

// 复杂MD5加密，防止暴力破解
function md5Pwd(pwd){
    const salt = 'hjt_is-good@V587--%^&*%$$^&';
    return utility.md5(utility.md5(pwd+salt));
}

module.exports = Router