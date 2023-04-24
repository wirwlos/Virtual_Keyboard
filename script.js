//calling everything from HTML
const display = document.querySelector('.display');
const keyboard = document.querySelector('.keyboard');
const letters = keyboard.querySelectorAll('.letter');
const backspace = document.querySelector('.backspace');
const shiftButtons=document.querySelectorAll('.shift,.capslock,.shift2')
const caps = document.querySelector('.capslock');
const enter=document.querySelector('.enter');
const shift=document.querySelector('.shift');
const shift2=document.querySelector('.shift2');
const space=document.querySelector('.space');
//setting capslock false, later we will change it by clicking
let isCapsLockOn = false;
//by slice function, we delete one letter/character from display
backspace.addEventListener("click", () => {
  let text = display.innerHTML;
  text = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  display.innerHTML = text.slice(0, -1);
});

//changing content after clickin "shift" or "capslock" and capitalizing letters
//i know its not clean but it works ¯\_(ツ)_/¯
shiftButtons.forEach(button => {
    button.addEventListener("click", () => {
      isCapsLockOn = !isCapsLockOn;
      caps.classList.toggle("active", isCapsLockOn);
      letters.forEach((letter) => {
      if (isCapsLockOn) {
        letter.textContent = letter.getAttribute("data-letter").toUpperCase();
        if (letter.getAttribute("data-letter") === "1") {
            letter.textContent = "!";
            letter.setAttribute("data-letter", "!");
          } else if (letter.getAttribute("data-letter") === "2") {
            letter.textContent = "@";
            letter.setAttribute("data-letter", "@");
          } else if (letter.getAttribute("data-letter") === "3") {
            letter.textContent = "#";
            letter.setAttribute("data-letter", "#");
          } else if (letter.getAttribute("data-letter") === "4") {
            letter.textContent = "$";
            letter.setAttribute("data-letter", "$");
          } else if (letter.getAttribute("data-letter") === "5") {
            letter.textContent = "%";
            letter.setAttribute("data-letter", "%");
          } else if (letter.getAttribute("data-letter") === "6") {
            letter.textContent = "^";
            letter.setAttribute("data-letter", "^");
          } else if (letter.getAttribute("data-letter") === "7") {
            letter.textContent = "&";
            letter.setAttribute("data-letter", "&");
          } else if (letter.getAttribute("data-letter") === "8") {
            letter.textContent = "*";
            letter.setAttribute("data-letter", "*");
          } else if (letter.getAttribute("data-letter") === "9") {
            letter.textContent = "(";
            letter.setAttribute("data-letter", "(");
          } else if (letter.getAttribute("data-letter") === "0") {
            letter.textContent = ")";
            letter.setAttribute("data-letter", ")");
          } else if (letter.getAttribute("data-letter") === "-") {
            letter.textContent = "_";
            letter.setAttribute("data-letter", "_");
          } else if (letter.getAttribute("data-letter") === "=") {
            letter.textContent = "+";
            letter.setAttribute("data-letter", "+");
          } else if (letter.getAttribute("data-letter") === "`") {
            letter.textContent = "~";
            letter.setAttribute("data-letter", "~");
          } else if (letter.getAttribute("data-letter") === ";") {
            letter.textContent = ":";
            letter.setAttribute("data-letter", ":");
          } else if (letter.getAttribute("data-letter") === "'") {
            letter.textContent = '"';
            letter.setAttribute("data-letter", '"');
          } else if (letter.getAttribute("data-letter") === ",") {
            letter.textContent = "<";
            letter.setAttribute("data-letter", "<");
          } else if (letter.getAttribute("data-letter") === ".") {
            letter.textContent = ">";
            letter.setAttribute("data-letter", ">");
          } else if (letter.getAttribute("data-letter") === "/") {
            letter.textContent = "?";
            letter.setAttribute("data-letter", "?");
          } else if (letter.getAttribute("data-letter") === "[") {
            letter.textContent = "{";
            letter.setAttribute("data-letter", "{");
          } else if (letter.getAttribute("data-letter") === "]") {
            letter.textContent = "}";
            letter.setAttribute("data-letter", "}");
          } else if (letter.getAttribute("data-letter") === "\\") {
            letter.textContent = "|";
            letter.setAttribute("data-letter", "|");
      } 
    }
      else {

        if (letter.getAttribute("data-letter") === "!") {
            letter.textContent = "1";
            letter.setAttribute("data-letter", "1");
          } else if (letter.getAttribute("data-letter") === "@") {
            letter.textContent = "2";
            letter.setAttribute("data-letter", "2");
          } else if (letter.getAttribute("data-letter") === "#") {
            letter.textContent = "3";
            letter.setAttribute("data-letter", "3");
          } else if (letter.getAttribute("data-letter") === "$") {
            letter.textContent = "4";
            letter.setAttribute("data-letter", "4");
          } else if (letter.getAttribute("data-letter") === "%") {
            letter.textContent = "5";
            letter.setAttribute("data-letter", "5");
          } else if (letter.getAttribute("data-letter") === "^") {
            letter.textContent = "6";
            letter.setAttribute("data-letter", "6");
          } else if (letter.getAttribute("data-letter") === "&") {
            letter.textContent = "7";
            letter.setAttribute("data-letter", "7");
          } else if (letter.getAttribute("data-letter") === "*") {
            letter.textContent = "8";
            letter.setAttribute("data-letter", "8");
          } else if (letter.getAttribute("data-letter") === "(") {
            letter.textContent = "9";
            letter.setAttribute("data-letter", "9");
          } else if (letter.getAttribute("data-letter") === ")") {
            letter.textContent = "0";
            letter.setAttribute("data-letter", "0");
          } else if (letter.getAttribute("data-letter") === "_") {
            letter.textContent = "-";
            letter.setAttribute("data-letter", "-");
          } else if (letter.getAttribute("data-letter") === "+") {
            letter.textContent = "=";
            letter.setAttribute("data-letter", "=");
          } else if (letter.getAttribute("data-letter") === "~") {
            letter.textContent = "`";
            letter.setAttribute("data-letter", "`");
          } else if (letter.getAttribute("data-letter") === ":") {
            letter.textContent = ";";
            letter.setAttribute("data-letter", ";");
          } else if (letter.getAttribute("data-letter") === '"') {
            letter.textContent = "'";
            letter.setAttribute("data-letter", "'");
          } else if (letter.getAttribute("data-letter") === "<") {
            letter.textContent = ",";
            letter.setAttribute("data-letter", ",");
          } else if (letter.getAttribute("data-letter") === ">") {
            letter.textContent = ".";
            letter.setAttribute("data-letter", ".");
          } else if (letter.getAttribute("data-letter") === "?") {
            letter.textContent = "/";
            letter.setAttribute("data-letter", "/");
          } else if (letter.getAttribute("data-letter") === "{") {
            letter.textContent = "[";
            letter.setAttribute("data-letter", "[");
          } else if (letter.getAttribute("data-letter") === "}") {
            letter.textContent = "]";
            letter.setAttribute("data-letter", "]");
          } else if (letter.getAttribute("data-letter") === "|") {
            letter.textContent = "\\";
            letter.setAttribute("data-letter", "\\");
          }
          letter.textContent = letter.getAttribute("data-letter").toLowerCase();
      }
    });
  });
});
  //with this code our "ENTER" now let us go to next line
enter.addEventListener("click",()=>{
    display.innerHTML+= "<br>"
})
//showing our letters which clicked in our display
letters.forEach((letter) => {
  letter.addEventListener("click", () => {
    let keyName = letter.getAttribute("data-letter");
    //if capslock on, we capitalizing them
    if (isCapsLockOn) {
        keyName = keyName.toLocaleUpperCase();
        letters.forEach(l => l.textContent = l.textContent.toLocaleUpperCase());
    }
    //if capslock off, we "lowercasing" them 
    else{
        letters.forEach(l => l.textContent = l.textContent.toLocaleLowerCase());
    }
    //we add the clicked key to our display
    display.innerHTML += keyName;
    if(display.innerHTML.length==31||display.innerHTML.length==66 ||display.innerHTML.length==101){
        display.innerHTML+="<br>"
    }
  });
});
