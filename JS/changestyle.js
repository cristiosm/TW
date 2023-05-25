export function changeStyle() {
  const elementById = document.getElementById('myElement');
  elementById.style.color = 'red';

  const elementsByClass = document.getElementsByClassName('myElements');
  for (let i = 0; i < elementsByClass.length; i++) {
    elementsByClass[i].style.backgroundColor = 'blue';
  }

  const elementsByTag = document.getElementsByTagName('p');
  for (let i = 0; i < elementsByTag.length; i++) {
    elementsByTag[i].style.fontWeight = 'bold';
  }

  const elementByQuery = document.querySelector('.myElement');
  elementByQuery.style.fontSize = '24px';
}
