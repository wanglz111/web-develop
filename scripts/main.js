const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').addEventListener('click', function() {
    const myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello world!';
});

document.querySelector('p').addEventListener('click', () => {
    console.log("hello world!")
})

let myButton = document.querySelector('button');

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}