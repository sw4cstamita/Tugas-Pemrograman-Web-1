function tampilkanMenu() {
    const pilihan = parseInt(document.getElementById("pilihan").value);
    const output = document.getElementById("output");
    output.innerHTML = ""; // reset output

    switch(pilihan) {
        case 1:
            // Menu 1: tampilkan link ke file Tugas 16.html
            output.innerHTML = `
                <p>Klik link berikut untuk membuka Kalkulator:</p>
                <a href="Tugas 16.html" target="_blank">
                    Buka Kalkulator
                </a>`;
            break;

        case 2:
            hitungTrapesium();
            break;

        case 3:
            tampilDeret();
            break;

        default:
            output.innerHTML = "<p style='color:red'>Pilihan tidak valid! Masukkan 1, 2, atau 3.</p>";
    }
}

// Fungsi Hitung Luas Trapesium
function hitungTrapesium() {
    const a = parseFloat(prompt("Masukkan panjang alas atas (a):"));
    const b = parseFloat(prompt("Masukkan panjang alas bawah (b):"));
    const t = parseFloat(prompt("Masukkan tinggi (t):"));
    const luas = (a + b) * t / 2;

    document.getElementById("output").innerHTML =
        `<p>Luas Trapesium = (${a} + ${b}) * ${t} / 2 = ${luas}</p>`;
}

// Fungsi Deret Bilangan
function tampilDeret() {
    const n = parseInt(prompt("Masukkan jumlah bilangan:"));
    let deret = "";
    for (let i = 1; i <= n; i++) {
        deret += i + " ";
    }
    document.getElementById("output").innerHTML =
        `<p>Deret Bilangan 1 sampai ${n}:<br>${deret}</p>`;
}
