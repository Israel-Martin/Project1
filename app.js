// get modal elements
const modal = document.getElementById("centre");
const body = document.getElementById("body");

// get button that opens the modal
const btn = document.getElementById("my-btn");

// get span that closes modal 
const close = document.getElementsByClassName("x")[0];

// open modal when the button is clicked 
btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}

// when user clicks close, close the modal 
close.onclick = function() {
    modal.style.display = "none";
    search.style.display = "none";
    body.style.overflow = "auto";
}
