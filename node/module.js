#!/usr/bin/env node

var car = (function(name) {
    return {
        getCar: function(){
            return _name;
        },
        setCar: function(name){
            _name = name;
        },
    };
})();

module.export = car;

var c1 = car;
c1.setCar("Nissan");
console.log(c1.getCar());
var c2 = car;
c2.setCar("VW");
console.log(c2.getCar());
