export function manipulateDOM() {
  const newElement = document.createElement('div');
  newElement.textContent = 'Aceasta este o noua divizie';
  newElement.classList.add('newDiv');

  const container = document.getElementById('container');
  container.appendChild(newElement);

  const elementToDelete = document.getElementById('elementToDelete');
  elementToDelete.remove();
}
