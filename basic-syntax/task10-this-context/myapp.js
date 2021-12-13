var object = {
    prop : "abc",
    method : function(){return this}
};

var array = [
    123,
    function(){return this}
];

var objectFunctionFunction = {
    prop : "abc",
    method : function()
    {
        let OIOFunction = function()
        {
            return this;
        };
        return OIOFunction();
    }
};

var arrayObjectFunction = [
    'string',
    123,
    {name : 'Fadil', 
    method : function(){
        return this;
    }}
];

function function1(){
    function function2(){
        return `Hello world`;
    }
    return function2();
};

var callThis = function(){return this};
console.log(object.method());
console.log(array[1]());
console.log(objectFunctionFunction.method());
console.log(arrayObjectFunction[2].method());
console.log(function1());