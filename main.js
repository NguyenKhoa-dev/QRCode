const btn = document.getElementById('btn-convert'),
inputContent = document.getElementById('input-content'),
QRimage = document.getElementById('QR-image'),
result = document.getElementById('rsl');


btn.onclick = () => {
    let value = inputContent.value;
    if (value) {
        QRimage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${value}&size=250x250`;
        result.classList.add('show');
    }
}

function clearInput() {
    inputContent.value = '';
    result.classList.remove('show');
}