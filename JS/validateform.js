export function validateForm() {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;

    const regex = /^[A-Za-z]+$/;
    if (regex.test(inputValue)) {
      console.log('Valoarea introdusa este valida');
    } else {
      console.log('Valoarea introdusa NU este valida');
    }
  });
}
