var kamar = [
    "kasur",
    "kontainer",
    "kipas",
    function(){return "beresin"},
    {doSholat : function(){return "sholat"}}
];

// Array Assignment/Replacement //
kamar[0] = "spring bed";
console.log(kamar);         // index [0] become "spring bed" //

// Array += Assignment //
kamar[0] += " kasur";
console.log(kamar);         // index [0] become "spring bed kasur" //

// Array Addition //
kamar[5] = "tas";
console.log(kamar);         // kamar array add new index [5] "tas" //

// Array __proto__ object shift method //
kamar.shift();              // delete first element of array and return it  //
console.log(kamar);         // now kamar array dont have "spring bed kasur" //

// Array __proto__ object pop method //
kamar.pop();                // delete last element of array and return it  //
console.log(kamar);         // now kamar array dont have "tas" //

// Array __proto__ object unshift method //
kamar.unshift("pintu","karpet");              // add elements to the top of array and return the length of the array  //
console.log(kamar);                           // now kamar array added new elements "pintu" & "karpet" at the top of array //

// Array __proto__ object push method //
kamar.push("bantal","guling");              // add elements to the end of array and return the length of the array  //
console.log(kamar);                        // now kamar array added new elements "bantal" & "guling" at the end of array //

// Array __proto__ object splice method //
kamar.splice(2,2);              // delete the selected element of array and return the deleted elements, if necessary insert new elements aswell //
console.log(kamar);             // now kamar array dont have "kontainer" and "kipas" //
kamar.splice(2,0,"kontainer","kipas");
console.log(kamar);             // now kamar array have "kontainer" and "kipas" again //
kamar.splice(2,2,"kontainer dan kipas");
console.log(kamar);             // now "kontainer" and "kipas" value replaced with "kontainer dan kipas" //

