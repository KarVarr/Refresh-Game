// firstDice

let randomNumb = Math.floor(Math.random () * 6) +1;

let randomImg = "img/dice" + randomNumb + ".svg"


document.querySelector('img').setAttribute("src", randomImg);

// secondDice

let randomNumb2 = Math.floor(Math.random () * 6) +1;

let randomImg2 = "img/dice" + randomNumb2 + ".svg"


document.querySelector('.imgClass').setAttribute("src", randomImg2);


// ifelse for flag

if (randomNumb > randomNumb2 ) {
    document.querySelector('i').classList.add('faFlag1');
} else if (randomNumb < randomNumb2){
    document.querySelector('.i2').classList.add('faFlag1');
}


