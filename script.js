const dialogButton = document.getElementsByClassName('dialog-btn')[0];
const calculateButton = document.getElementsByClassName('calculate')[0];
const dialog = document.getElementsByClassName('dialog')[0];


let isOpened = false;
const toggleDialog = () => {
    if (isOpened) {
        dialog.classList.remove('display')
        isOpened = false;
    } else {
        dialog.classList.add('display');
        isOpened = true;
    }
}

const calculateBMI = () => {

    const height = Number(document.getElementsByClassName('height')[0].value) / 100;
    const weight = Number(document.getElementsByClassName('weight')[0].value);
    const dialogTitle = document.getElementsByClassName('dialog-title')[0];
    const dialogResult = document.getElementsByClassName('res')[0];
    const dialogResultIcon = document.getElementsByClassName('result-icon-wrap')[0];

    const result = weight / (height * height);
    if (isNaN(height) || isNaN(weight)) {
        dialogTitle.innerHTML = 'Result: Invalid Details'
        dialogResult.innerHTML = ''
        dialogResultIcon.innerHTML = '<i class="fas fa-exclamation-triangle danger"></i>'
    }
    else {
        if (result < 18.5) {
            dialogResult.innerHTML = 'Result: Underweight'
            dialogResultIcon.innerHTML = '<i class="fas fa-exclamation-circle danger"></i>'
        } else if (result >= 18.5 && result <= 24.9) {
            dialogResult.innerHTML = 'Result: Healthy'
            dialogResultIcon.innerHTML = '<i class="fas fa-check done"></i>'
        } else if (result >= 25.0 && result <= 29.9) {
            dialogResult.innerHTML = 'Result: Overweight'
            dialogResultIcon.innerHTML = '<i class="fas fa-exclamation-circle warn"></i>'
        } else if (result >= 30.0) {
            dialogResult.innerHTML = 'Result: Obese'
            dialogResultIcon.innerHTML = '<i class="fas fa-skull-crossbones skull"></i>'
        }
        dialogTitle.innerHTML = `BMI Index: ${Math.round(result)}`
    }

    toggleDialog();
}

dialogButton.addEventListener('click', toggleDialog);
calculateButton.addEventListener('click', calculateBMI);