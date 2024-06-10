const box = document.querySelector('.box');
const btn = document.getElementById('change-color-btn');
const backgroundColorName = document.getElementById('background-color-name');
const nav = document.getElementById('navbar');

btn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
   // Update entire page background color
   box.style.backgroundColor = randomColor;
   btn.style.backgroundColor = randomColor;
   nav.style.backgroundColor =randomColor;
  backgroundColorName.textContent = randomColor.toUpperCase();
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
