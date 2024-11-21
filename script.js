function generate() {
  var contenido = document.getElementById("qrtext").value;
  var size = document.getElementById("size").value;

  if (size === "" || isNaN(size) || size <= 0) {
    alert("Por favor, introduce un tamaño válido (número positivo).");
    return;
  }
  var qrElement = document.getElementById("qrImage");

  QRCode.toDataURL(
    contenido,
    {
      width: size,
      height: size,
    },
    function (err, url) {
      if (err) {
        console.error(err);
        return;
      }
      qrElement.src = url;
    }
  );
}
