let selectPointer = document.getElementsByName('vga')[0];

selectPointer.onclick = function(event){
   console.log(event); 
};

function ClickCallback( event ){
    console.log('Clicked!');
}

selectPointer.addEventListener( 'click', ClickCallback);

selectPointer.removeEventListener( 'click', ClickCallback);