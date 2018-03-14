var orm = require('../config/orm.js');

// object that will be exported
var burger = {
    selectWhere: function(burgerName, callback){
        orm.selectWhere('burgers', 'burger_name', burgerName, function(returnData){
            callback(returnData)
        });
    },
    insertBurger: function(column, name, callback){

        orm.insertBurger('burgers', column, name, function(returnData){

            callback(returnData);
        });
    },
    selectAll: function(callback){
        // used to display table burger data from database
        orm.selectAll('burgers', function(returnData){

            callback(returnData);
        })
    },
    updateBurger: function(table, column, id, callback){
        orm.updateBurger('burgers', column, id, function(returnData){
            callback(returnData)
        })
    },
    deleteBurger: function(table, id, callback){
        orm.deleteBurger('burgers', id, function(returnData){
            callback(returnData)
        })
    }
}



module.exports = burger;