// add event listeners to all the buttons 
let numberOfButtons = document.querySelectorAll(".button").length;
for (let j = 0 ; j < numberOfButtons;j++){
    document.querySelectorAll("button")[j].addEventListener("click",function(){
        let buttonStyle = this.innerHTML;
        sound(buttonStyle);
        Animation(buttonStyle);
    });
}