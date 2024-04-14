
const inputBox = document.getElementById('tributetext');
const addButton = document.querySelector('.btn');


addButton.addEventListener('click', function () {

    const tributeText = inputBox.value;

    const newText = document.createElement('p');
    newText.textContent = tributeText;

    const tributeSection = document.querySelector('.TributeSection');
    tributeSection.appendChild(newText);

    inputBox.value = '';
});
