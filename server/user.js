const express = require('express');
const Router = express.Router();
const model = require('./module')
const Users = model.getModel('users');
const utility = require('utility')

// --------------------关于user路由的中间件---------------------------//
const _filter = {pwd:0,__v:0}
//判断客户端是否有cookie
Router.get('/info',(req,res) => {
    const { userid } = req.cookies;
    if(!userid){
        return res.json({code: 1});
    }
    Users.findOne({_id:userid},_filter,(err,doc) => {
        if(err){
            return res.json({code:1,msg:"服务器维护中"});
        }
        if(doc){
            return res.json({code:0,data:doc});
        }
    })
})

// mongo数据库中用户表Users
Router.get('/list',(req,res) => {
    Users.find({},(err,doc) => {
        return res.json(doc);
    })
})

// 注册提交接口
Router.post('/register',(req,res) => {
    const {user,pwd,type} = req.body;
    Users.findOne({user},_filter,(err,doc) =>{
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new Users({user,type,pwd:md5Pwd(pwd)});
        userModel.save(function (err,doc) {
            if(err){
                return res.json({code:1,msg:'后台出错了'});
            }
            const {user,type,_id} = doc;
            //注册的同时将生成的用户id保存到cookie中，这样刷新页面的时候就会保持在当前页面了
            res.cookie('userid',_id);
            return res.json({code:0,data:{user,type,_id}});
        });
    })
})

// 登录提交接口
Router.post('/login',(req,res) => {
    const {user,pwd} = req.body;
    Users.findOne({user,pwd:md5Pwd(pwd)},_filter,(err,doc) =>{
        if(err){
            return res.json({code:1,msg:'服务器维护中'});
        }
        if(!doc){
            return res.json({code:1,msg:'用户名或密码不存在'});
        }
        res.cookie('userid', doc._id);
        return res.json({code:0,data:doc});   
    })
})

// 更新个人信息提交入口
Router.post('/update',(req,res) => {
    const userid = req.cookies.userid;
    const body = req.body;
    if(!userid){
        return res.json({code:1});
    }
    Users.findByIdAndUpdate(userid,body,function(err,doc){
        // 将body里面的所有值和body里面没有的user，type合并到一个新的对象中去
        const data = Object.assign({},{user: doc.user,type:doc.type},body)
        return res.json({ code: 0, data })
    })
})

Router.get('/remove',(req,res) => {
    Users.remove({},(err,doc) => {
        if(doc){
            return res.json(doc);
        }
    })
})

// 复杂MD5加密，防止暴力破解
function md5Pwd(pwd){
    const salt = 'hjt_is-good@V587--%^&*%$$^&';
    return utility.md5(utility.md5(pwd+salt));
}

module.exports = Router