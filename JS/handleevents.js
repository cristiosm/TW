export function handleEvents() {
  const timeoutID = setTimeout(() => {
    console.log('A trecut un interval de 2 secunde');
  }, 2000);

  const intervalID = setInterval(() => {
    console.log('Aceasta se repeta la fiecare 3 secunde');
  }, 3000);

  localStorage.setItem('username', 'JohnDoe');
  const storedUsername = localStorage.getItem('username');
  console.log('Username stocat:', storedUsername);

  const randomNumber = Math.random();
  const arrayExample = [1, 2, 3, 4, 5];
  const reversedArray = arrayExample.reverse();
  const stringExample = 'Hello, World!';
  const uppercaseString = stringExample.toUpperCase();
  const currentDate = new Date();

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    
    const mouseElement = document.getElementById('mouseElement');
    mouseElement.addEventListener('mouseover', () => {
    console.log('Mouse-ul a intrat pe element');
    });
    
    const keyboardInput = document.getElementById('keyboardInput');
    keyboardInput.addEventListener('keydown', (event) => {
    console.log('A fost apasata tasta:', event.key);
    });
    
    const parentElement = document.getElementById('parentElement');
    parentElement.addEventListener('click', (event) => {
    console.log('Elementul clicat:', event.target);
    console.log('Elementul curent:', event.currentTarget);
    });
    
    const linkElement = document.getElementById('linkElement');
    linkElement.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Link-ul a fost apasat, dar actiunea implicita a fost oprita');
    });
    
    const elementInfo = document.getElementById('elementInfo');
    const computedStyle = getComputedStyle(elementInfo);
    console.log('Inaltimea elementului:', computedStyle.height);
    console.log('Latimea elementului:', computedStyle.width);
    
    const boundingRect = elementInfo.getBoundingClientRect();
    console.log('Coordonatele elementului:', boundingRect.top, boundingRect.left);
    }