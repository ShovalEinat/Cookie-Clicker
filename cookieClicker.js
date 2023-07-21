let cookie = document.getElementById("cookie");
let cookiesAmo = document.getElementById("cookiesAmo");
let X2 = document.getElementById("X2");
let X4 = document.getElementById("X4");
let X2number = document.getElementById("X2number");
let grandma = document.getElementById("grandma");
let grandma2 = document.getElementById("grandma2");
let cpsDisplay = document.getElementById("cpsDisplay");
let cookies = 0;
let lvl = 1;
let extraCookies;
X4.style.display = "none";
grandma2.style.display = "none";
let extraCookiesChance = 0; 
grandma2on = false;
let clickCount = 0;
let startTime = 0;
let endTime = 0;


function cookieClick() {
    if(lvl == 1){
        cookies++;
        cookiesAmo.innerText = "Cookies: " + cookies;
    }
    else if(lvl == 2){
        cookies = cookies +2;
        cookiesAmo.innerText = "Cookies: " + cookies;
    }
    else if(lvl == 3){
        cookies = cookies +4;
        cookiesAmo.innerText = "Cookies: " + cookies;
    }
    if (Math.random() < extraCookiesChance) {
        if (lvl == 2) {
            extraCookies = 4;
        } 
        else if (lvl == 3) {
            extraCookies = 8;
        } 
        else{
            extraCookies = 2;
        }
        document.getElementById("cookiesAmo").innerText = "Cookies: " + cookies;
        cookies += extraCookies; 
    }
}

function x2Check() {
    if (cookies >= 200){
        X2.style.display = "none";
        X4.style.display = "inline-block";
        lvl = 2;
        alert("You have successfully bought the X2!")
        cookies = cookies - 200;
        cookiesAmo.innerText = "Cookies: " + cookies;
        X2number.innerText = "X2: On";
    }
    else{
        alert("Not Enough Money!")
    }
}

function x4Check() {
    if (lvl == 3) {
        alert("You already have this item!");
    }
    else if(cookies >= 500) {
      X4.style.display = "inline-block";
      lvl = 3;
      cookies = cookies - 500;
      cookiesAmo.innerText = "Cookies: " + cookies;
      X2number.innerText = "X4: On";
      alert("You have successfully bought the X4!");
      X4.style.filter = "brightness(0.4)";
      X4.style.cursor = "auto";
    } else {
      alert("Not Enough Money!");
    }
}

function grandmaCheck() {
    if (cookies >= 100){
        grandma.style.display = "none";
        extraCookiesChance = 0.25;
        alert("You have successfully bought the Grandma (lvl1)!")
        cookies = cookies - 100;
        cookiesAmo.innerText = "Cookies: " + cookies;
        grandmaNumber.innerText = "Grandma (lvl1): On";
        grandma2.style.display = "inline-block";
    }
    else{
        alert("Not Enough Money!")
    }
}

function grandmaCheck2() {
     if (grandma2on == true) {
        alert("You already have this item!");
     }
     else if(cookies >= 400) {
        extraCookiesChance = 0.40;
        cookies = cookies - 400;
        cookiesAmo.innerText = "Cookies: " + cookies;
        grandmaNumber.innerText = "Grandma (lvl2): On";
        alert("You have successfully bought the Grandma (lvl2)!");
        grandma2.style.filter = "brightness(0.4)";
        grandma2.style.cursor = "auto";
        grandma2on = true;
    } else {
      alert("Not Enough Money!");
    }
}

function paskaro() {
    cookies = cookies + 12345678;
    cookiesAmo.innerText = "Cookies: " + cookies;
}