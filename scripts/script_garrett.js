/*
File: script.js
Author: Garrett Huffar
Date: 2/26/2026
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Function to display first answer to the question
function displayAnswer1(){
    answer.style.display = "block";
    heading.style.display = "block";

    answer.textContent = "Step back and observe the situation for a few minutes. Wait to see if a parrent arrives.If the animal is in immediate danger, such as being in the middle of a road, remove the baby and bring to resuce center."
}

//Function to display second answer to the question
function displayAnswer2(){
    answer.style.display = "block";
    heading.style.display = "block";

    answer.textContent = "You cannot tell if an animal has rabies simply by seeing it. A test must be performed by a veterinarian to determine if an animal has rabies. If you see an animal that is acting strangely, such as being aggressive or lethargic, it is best to keep a safe distance and contact local animal control or a wildlife rescue organization for assistance."
}

//Function to display third answer to the question
function displayAnswer3(){
    answer.style.display = "block";
    heading.style.display = "block";

    answer.textContent = "No. This is a myth. The parents will retrieve the baby bird and place it back in its nest if it falls out."
}

//Function to display fourth answer to the question
function displayAnswer4(){
    answer.style.display = "block";
    heading.style.display = "block";

    answer.textContent = "We need volunteers to help feed animals, care for animals, and clean animal pins. We also accept donations to help pay for food, medical care, and other supplies needed to care for the animals. If you are interested in volunteering or donating, please contact us through our website or visit our rescue center."
}

//Hamberger menu function
function menu(){
    var navlinks = document.getElementById("nav-links");
    var menuIcon = document.getElementById("menu-icon");
    if (navlinks.style.display === "block"){
        navlinks.style.display = "none";
        menuIcon.style.color = "#2a1f14";
    } else {
        navlinks.style.display = "block";
        menuIcon.style.color = "#f6eee4";
    }
}
