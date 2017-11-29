var assert = require('assert')
var car = require('./module');

console.log("car ", car);

describe('Testing module', function() {
    describe('Simple object create test', function(){
        it("Access private varibale using function", function(){
            var c1 = car;
            c1.setCar("Nissan");
            assert.equal("Nissan", c1.getCar());
        })
    });

});
