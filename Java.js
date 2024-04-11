const container = document.querySelector('.container');
const qrInput = container.querySelector('.form input');
const generateBtn = container.querySelector('.form button');
const qrImg = container.querySelector('.qr-code .img');

function generateQRCode() {
    let qrValue = qrInput.value;
    if (!qrValue) {
        alert('Insira sua URL ou texto para gerar um QR-Code');
        return;
    }
    generateBtn.innerText = "Gerando um QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        generateBtn.innerText = "Gerar QR Code";
        container.classList.add('active');
    });
}

generateBtn.addEventListener('click', generateQRCode);

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        container.classList.remove('active');
    }
});