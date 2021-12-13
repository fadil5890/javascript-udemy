var myName = "Lawrence"; // #3 //

console.log( myName, printName() ); // #2 //


function printName() // #1 //
{
    console.log( a, embed() ); // #b //
    
    var a = 100; // #c //
    
    function embed()
    { 
        return "hello"; 
    
    } // #a //
    
    return "John Doe"; // #d //
}