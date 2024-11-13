let sendButton = document.getElementById('sendButton');
let input = document.querySelector("#tel");
let lineabar = document.getElementById('lineaBar');
let errorAlert = document.getElementById('errorAlert');
let closeAlert = document.getElementById('closeAlert');
let buscar = document.querySelector('.buscar');

var iti = window.intlTelInput(input, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js",
    preferredCountries: ['us', 'mx', 'es'],
    separateDialCode: true,
    initialCountry: "auto",
});

input.addEventListener('input', function() {
    if (iti.isValidNumber()) {
        sendButton.disabled = false;
    } else {
        sendButton.disabled = true;
    }
});

sendButton.addEventListener('click', () => {
    sendButton.textContent = 'Buscando información...';
    sendButton.disabled = true;
    startLoading();
    showError();
    setTimeout(() => {
        sendButton.textContent = 'Enviar';
        sendButton.disabled = false;
    }, 10000);
});

closeAlert.addEventListener('click', () => {
    location.reload();
});

function startLoading() {
    lineabar.style.width = '0%';
    errorAlert.style.display = 'none';
    setTimeout(() => {
        lineabar.style.width = '80%';
    }, 100);
}

function showError() {
    setTimeout(() => {
        errorAlert.style.display = 'block';
    }, 10000);
}
