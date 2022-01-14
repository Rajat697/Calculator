let screen = document.getElementById('screen');   //getting the input area

buttons = document.querySelectorAll('button');    // getting the buttons

let screenValue ='';     // value of input area


for(item of buttons){
    item.addEventListener('click' , (f)=>{
        buttonText = f.target.innerText;    // will give you the text  inside of that particulat button

        if(buttonText == 'X'){
            buttonText = '*';
            screen.value += buttonText;
            screen.value = screenValue;
        }
        
        // For clearing the input area

        if(buttonText== 'Ac') {
            screenValue = '';
            screen.value = screenValue;

            //for clearing a single input
            
        }else if (buttonText == 'C') {
            screenValue = screen.value.substr(0, screen.value.length-1)     // returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
            screen.value = screenValue;
        }
        
        
        else if (buttonText == '=') {
            screen.value = eval(screenValue)   //eval() For evaluating The Screen value
            
        } else{
            screenValue += buttonText;    //button text will add in screen value
            screen.value = screenValue;
        }
    })
}