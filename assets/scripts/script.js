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

button.addEventListener('click', function() {
    const mode = document.querySelector('.default')
    mode.classList.toggle('dark_mode')
})

    // ---modal----

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ---------CALCULATOR------------

function convert() {
    // fetch the value from the input
    const fahrenhiet = parseInt(document.getElementById("fahrenhiet").value
    );
    // convert
    const celsius = (fahrenhiet - 32) * 0.5556;
    console.log(celsius);
    // display number
    document.getElementById("celsius").innerText = celsius;
  }

  function feetconvert() {
    // fetch the value from the input
    const feet = parseInt(document.getElementById("feet").value
    );
    // convert
    const miles = (feet* 0.0001894);
    // display number
    document.getElementById("miles").innerText = miles;
  }

  function cmconvert() {
    // fetch the value from the input
    const feet = parseInt(document.getElementById("inches").value
    );
    // convert
    const cm = (feet*2.54);
    // display number
    document.getElementById("cm").innerText = cm;
  }