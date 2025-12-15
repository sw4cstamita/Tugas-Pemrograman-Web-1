// Tunggu sampai dokumen siap (opsional tapi aman)
document.addEventListener("DOMContentLoaded", function () {
  const btnHitung = document.getElementById("btnHitung");

  btnHitung.addEventListener("click", function () {
    const n1 = parseFloat(document.getElementById("nilai1").value);
    const n2 = parseFloat(document.getElementById("nilai2").value);
    const op = document.getElementById("operator").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(n1) || isNaN(n2)) {
      alert("Nilai I dan Nilai II harus diisi!");
      resultDiv.textContent = "";
      return;
    }

    let hasil;

    switch (op) {
      case "+":
        hasil = n1 + n2;
        break;
      case "-":
        hasil = n1 - n2;
        break;
      case "*":
        hasil = n1 * n2;
        break;
      case "/":
        if (n2 === 0) {
          alert("Tidak bisa dibagi 0!");
          resultDiv.textContent = "";
          return;
        }
        hasil = n1 / n2;
        break;
      case "^": // operasi pangkat
        hasil = Math.pow(n1, n2);
        break;
      default:
        hasil = "Operator tidak dikenal";
    }

    resultDiv.textContent = "Hasil: " + hasil;
  });
});
