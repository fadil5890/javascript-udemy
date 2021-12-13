function makeCoffee( sugar, milk )
{
    var instructions = "Boil water,";
    
    instructions += " pour into cup,";
    
    instructions += " add coffee granules,";
    
    instructions += " add " + sugar + " spoons of sugar,";
    
    instructions += " add " + milk + "ml milk.";
    
    return instructions;
}

console.log( makeCoffee( 2, 20 ) );

function doPushUp(rep,set,minute)
{
    var steps = "Tubuh di posisi tengkurap";
    steps += ", Angkat badan bagian atas dengan telapak tangan";
    steps += ", Turunkan badan sampai hampir menyentuh lantai dengan menahan beban badan";
    steps += ", Angkat kembali badan seperti yg telah dilakukan";
    steps += ", Lakukan dengan " + rep + "x repetisi dalam " + set + " set selama " + minute + " menit";
    return steps;
}

console.log(doPushUp(12,2,5));
var car = {
    color : "green",
    speed : 150,
    drive : function(){return "vroom vroom"},
    brake : function(){return "stop"}
};
console.log(car);
var fruit = [
    "Apple",
    "Watermelon",
    "Melon",
    10
];
console.log(fruit);