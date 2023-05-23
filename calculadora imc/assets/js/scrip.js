const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    const weight = parseFloat(weightInput.value.replace(',', '.'));
    const height = parseFloat(heightInput.value.replace(',', '.'));

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Insira valores numéricos válidos para peso e altura.');
        return;
      }

    const bmi = ( weight / (height * height)).toFixed(2)

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    value.classList.add('attention');

    if (bmi < 18.5) {
        description = 'Indivíduo abaixo do peso';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = 'Indivíduo no peso ideal';
        value.classList.remove('attention');
      } else if (bmi >= 25 && bmi <= 29.9) {
        description = 'Indivíduo com sobrepeso';
      } else if (bmi >= 30 && bmi <= 34.9) {
        description = 'Indivíduo com obesidade moderada';
      } else if (bmi >= 35 && bmi <= 39.9) {
        description = 'Indivíduo com obesidade severa';
      } else if (bmi >= 40) {
        description = 'Indivíduo com obesidade mórbida';
      } 

    value.textContent = bmi;
    document.getElementById('description').textContent = description;
});