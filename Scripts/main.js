/* Everything in between is a Comment
 This line also comment*/


// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello' + ' World!!!!';

// const myHeading2 = document.querySelector('h2');
// myHeading2.textContent = 2 + 3;


// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('Yay, I love ice cream');
// } else {
//     alert('Awww, but chocolate is my favorite...');
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// alert(multiply(4, 7));
// alert(multiply(20, 20));

// document.querySelector('html').onclick = function () {
//     alert('Ouch! Stop poking me!');
// }

// let myHtml = document.querySelector('html');
// myHtml.onclick = function () {
//     alert('Ouch! Dont poking me!!! again.');
// }

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox01.png');

    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name: ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;

    }


}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

//Allow user to enter different name by pressing button
myButton.onclick = function () {
    setUserName();
}