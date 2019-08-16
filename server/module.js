const mongoose = require('mongoose')

//连接mongodb,创建库(集合)fullstack，没有的话会自动新建
const DB_URL = 'mongodb://localhost:27017/fullstack';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongodb connect success');
});

//创建模型--多张表：user和chat
const models = {
    users:{
        user:{type:String,require:true},
        pwd:{type:String,require:true},
        type:{type:String,require:true},
        avatar:{type:String},
        desc:{type:String},
        title:{type:String},
        company:{type:String},
        money:{type:String}
    },
    chat:{}
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name);
    }
}

