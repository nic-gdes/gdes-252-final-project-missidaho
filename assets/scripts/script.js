//-------- HAMBURGER MENU----------

// create a var
const hamburger = document.querySelector('.hamburger');
// the window needs to be a certain size


// the hamburger is clicked then
hamburger.addEventListener('click',function (){
hamburger.classList.toggle('hamburger');
const list = document.querySelector('.list');
list.classList.toggle('active')
        

})
    // the list needs to pop down
   
// when the hamburger is clicked again the list needs to close


// --------dark and light mode-----------
// make a var for the button
const button = document.querySelector('.dark_mode_button')

// create an event listener that says when the button is clicked it toggles a class

button.addEventListener('click',function (){
    const text = document.querySelector('.dark_mode_text');
    button.classList.toggle('dark_mode_text');
    
    text.classList.toggle('active')
            
    
    })
