const myLink = document.getElementById('link');
const myTextInput = document.getElementById('myTextInput');
const myButton = document.getElementById('myButton');
const paragraphs = document.getElementsByTagName('p');
console.log('Link_color.js is up and running!')

myLink.addEventListener('click', () => {
  myLink.style.color = 'red';
});

myButton.addEventListener('click', () => {
  for (let i=0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = myTextInput.value;
  }
});
