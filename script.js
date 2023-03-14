//VARIABLES

const themeBtn = document.querySelector(".themeBtn");
const body = document.querySelector('body')
const spanCircle = document.getElementById("spanCircle");
const containerResult = document.querySelector(".container-result");
const result = document.getElementById('result')
const containerKeypad = document.querySelector(".container-keypad");
const del = document.getElementById('delete')
const reset = document.getElementById('reset')
const equals = document.getElementById('equals')
const calcHeading = document.getElementById("calcHeading");
const themeLabel = document.getElementById("themeLabel");
const buttons = document.querySelectorAll('button')
//

const buttonsList = [...buttons]
console.log(buttonsList)


themeBtn.addEventListener("click", toggle)

function toggle(){
 if (themeBtn.classList.contains("themeBtn")) {
   themeBtn.classList.add("theme2");
   calcHeading.style.color = "hsl(60, 10%, 19%)";
   themeLabel.style.color = "hsl(60, 10%, 19%)";
   body.style.backgroundColor = "hsl(0, 0%, 90%)";
   spanCircle.style.backgroundColor = "hsl(25, 98%, 40%)";
   containerResult.style.backgroundColor = "hsl(0, 0%, 93%)";
   result.style.color = "hsl(60, 10%, 19%)";
   containerKeypad.style.backgroundColor = "hsl(0, 5%, 81%)";
   del.style.backgroundColor = " hsl(185, 42%, 37%)";
   del.style.boxShadow = "0 4px 2px hsl(185, 58%, 25%)";
   reset.style.backgroundColor = " hsl(185, 42%, 37%)";
   reset.style.boxShadow = "0 4px 2px hsl(185, 58%, 25%)";
   equals.style.backgroundColor = " hsl(25, 98%, 40%)";
   equals.style.boxShadow = "0 6px 2px hsl(25, 99%, 27%)";
   themeBtn.addEventListener("click", function () {
     if (themeBtn.classList.contains("theme2")) {
       themeBtn.classList.add("theme3");
       for(button of buttonsList){
        button.style.backgroundColor = "hsl(268, 47%, 21%)";
        button.style.boxShadow = "0 2px 2px hsl(290, 70%, 36%)";
        button.style.color = "white"
       }
       calcHeading.style.color = "hsl(52, 100%, 62%)";
       themeLabel.style.color = "hsl(52, 100%, 62%)";
       body.style.backgroundColor = "hsl(268, 75%, 9%)";
       spanCircle.style.backgroundColor = "hsl(176, 100%, 44%)";
       containerResult.style.backgroundColor = "hsl(268, 71%, 12%)";
       result.style.color = "hsl(52, 100%, 62%)";
       containerKeypad.style.backgroundColor = "hsl(268, 71%, 12%)";
       del.style.backgroundColor = "hsl(281, 89%, 26%)";
       del.style.boxShadow = "0 4px 2px  hsl(285, 91%, 52%)";
       reset.style.backgroundColor = "hsl(281, 89%, 26%)";
       reset.style.boxShadow = "0 4px 2px  hsl(285, 91%, 52%)";
       equals.style.backgroundColor = "hsl(176, 100%, 44%)";
       equals.style.boxShadow = "0 4px 2px hsl(177, 92%, 70%)";
       themeBtn.addEventListener("click", function () {
         if (themeBtn.classList.contains("theme3")) {
           themeBtn.classList.remove("theme3");
           themeBtn.classList.remove("theme2");
           location.reload()
         }
       });
     }
   });
 }
}

