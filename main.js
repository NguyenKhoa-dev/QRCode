const btn = document.getElementById('btn-convert'),
inputContent = document.getElementById('input-content'),
QRimage = document.getElementById('QR-image'),
result = document.getElementById('rsl'),
pending = document.getElementById('pending');

var imgSrc;

btn.onclick = () => {
    let value = inputContent.value;
    if (value) {
        imgSrc = `https://api.qrserver.com/v1/create-qr-code/?data=${value}&size=250x250`;
        QRimage.src = imgSrc;
        result.classList.add('show');
    }
}

function clearInput() {
    inputContent.value = '';
    result.classList.remove('show');
}

async function copyPicture() {
    try {
      const response = await fetch(imgSrc);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      pending.classList.add('show');
      setTimeout(() => {
        pending.classList.remove('show');
      }, 2000)
    } catch (err) {
      console.error(err.name, err.message);
    }
};