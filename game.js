// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let score = 0;
let clear = undefined;
let timer = document.getElementById("timer");
let random1 =Math.floor(Math.random()*100);
let random2 =Math.floor(Math.random()*100);
let random3 = undefined
// Iteration 3: Creating variables required to make the game functional

let add = document.getElementById("plus");
let sub = document.getElementById("minus");
let mul = document.getElementById("mul");
let div = document.getElementById("divide");
let mod = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num3 = document.getElementById("number3");
let operators;
// Iteration 5: Creating a randomise function to make the game functional
function randomnumber(){
    operators = Math.floor(Math.random()*5);
    random1 = Math.floor(Math.random()*100);
    random2 = Math.floor(Math.random()*100);


if (random1 < random2){
    let timeVariable = random1;
    random1 = random2;
    random2 = timeVariable;
}
if (random1==0 || random2==0){
  randomnumber();
}
if (operators==5){
    random3 = random1 + random2;
}
else if (operators==4){
    random3 = random1 - random2;
}
else if (operators==3){
    random3 = random1 * random2;
}
else if(operators==2){
    random3 = Math.floor(random1/random2)
}
else if(operators==1){
    random3 = random1 % random2
}
else{
    randomnumber();

}
num1.innerText = random1;
num2.innerText = random2;
num3.innerText = random3;
  }
  randomnumber();
// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
function time(){
    let start = 20;
    timer.innerText = start;
    clear = setInterval(function(){
        start = start -1;
        timer.innerText = start;
        if (start==0){
            localStorage.setItem('score',score);
            window.location.href='./gameover.html';
        }
    }, 1000)
}
time();
add.addEventListener("click",function(){
    if(random1 + random2 == random3){
        score = score + 1;
        clearInterval(clear);
        time();
        randomnumber();
    } else{
        localStorage.setItem('score',score);
        window.location.href = './gameover.html';
    }
});
sub.addEventListener("click",function(){
    if(random1 - random2 == random3){
        score = score + 1;
        clearInterval(clear);
        time();
        randomnumber();
    } else{
        localStorage.setItem('score',score);
        window.location.href = './gameover.html';
    }
});
mul.addEventListener("click",function(){
    if(random1 * random2 == random3){
        score = score + 1;
        clearInterval(clear);
        time();
        randomnumber();
    } else{
        localStorage.setItem('score',score);
        window.location.href = './gameover.html';
    }
});
div.addEventListener("click",function(){
    if(random1 / random2 == random3){
        score = score + 1;
        clearInterval(clear);
        time();
        randomnumber();
    } else{
        localStorage.setItem('score',score);
        window.location.href = './gameover.html';
    }
});
mod.addEventListener("click",function(){
    if(random1 % random2 == random3){
        score = score + 1;
        clearInterval(clear);
        time();
        randomnumber();
    } else{
        localStorage.setItem('score',score);
        window.location.href = './gameover.html';
    }
});