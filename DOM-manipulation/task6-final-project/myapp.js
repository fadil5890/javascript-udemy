// Create 'let' for targetting all select elements //
let targetAllSelect = document.getElementsByName('css-property');

// Create 'let' for targetting div element *where the changes applied //
let targetDiv = document.getElementById('modify');

// Create 'var' for targetting 'set' button // #first
var targetSet = document.getElementById('set');

// Create 'set' function // #third
var set = function()
{
    // Create 'for' loop for displaying CSS properties to console //
    for( let index = 0; index < targetAllSelect.length; index++){

        // Create 'let' for targetting CSS attribute & value at select element //
        let cssAttribute = targetAllSelect[index].getAttribute('id');
        let cssValue = targetAllSelect[index].value;
        
        // Create 'let' for combining CSS attribute & values to one variable //
        let cssProperty = cssAttribute + ':' + cssValue;

        // Display CSS properties on console //
        console.log(cssProperty);
        
        // Change div element style based on selector //
        targetDiv.style[cssAttribute] = cssValue;
    }
}

// Adding event listener to 'set' button // #second
targetSet.addEventListener('click',set /* this is where the 'set' function called */ );