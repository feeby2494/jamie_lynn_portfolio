const odds = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odds.length; i += 1) {
  odds[i].style.backgroundColor = 'lightgray';
}
