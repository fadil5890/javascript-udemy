function Orange(x, y, color, score)
{
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
};

function CreatePC(mobo,vga,ram,cooler,casing){
    this.mobo = mobo;
    this.vga = vga;
    this.ram = ram;
    this.cooler = cooler;
    this.casing = casing;
};

CreatePC.prototype = {
    constructor : CreatePC,
    turnOn : function(){
        return 'Turning On...';
    },
    turnOff : function(){
        return 'Turning Off...';
    },
    reset : function(){
        return 'Restarting...';
    },
    fanCasing : 2
};

let FADIL_PC = new CreatePC('Amd','RTX 3080','4GB','Cooler Master','Corsair');

var orange500 = new Orange(50, 50, "orange", 500);
var orange250 = new Orange(25, 25, "yellow", 250);
var orange100 = new Orange(10, 10, "green", 100);

function iterateProperty(){
    for(let property in FADIL_PC){
        console.log(property);
    }
}

iterateProperty();
console.log(FADIL_PC.constructor);
console.log(orange500);
console.log(Object.prototype.isPrototypeOf(Orange.prototype));

// export {CreatePC,Orange};