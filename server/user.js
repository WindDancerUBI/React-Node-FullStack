const express = require('express');
const Router = express.Router();

// 关于user路由的中间件
Router.get('/info',(req,res) => {
    return res.json({code:0})
})

module.exports = Router