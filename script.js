// Contoh penggunaan if, else, dan nested if
let sudahmandi = "sudah";

if (sudahmandi === "sudah") {
  console.log("wangi");
} else if (sudahmandi === "belum") {
  console.log("bau");
} else {
  console.log("males");
} 

// Contoh penggunaan nested if 


let nilai = 75;

if (nilai >= 60) {
  console.log("Anda lulus.");

  if (nilai >= 90) {
    console.log("Anda mendapatkan nilai A.");
  } else if (nilai >= 80) {
    console.log("Anda mendapatkan nilai B.");
  } else if (nilai >= 70) {
    console.log("Anda mendapatkan nilai C.");
  } else {
    console.log("Anda mendapatkan nilai D.");
  }

} else {
  console.log("Anda tidak lulus.");
}

// Contoh penggunaan switch case
let hari = "selasa"

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu");
    break;
  default:
    console.log("Hari ini adalah hari lain");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 10; i++) {
  console.log("Perulangan ke-" + i);
}

// Contoh penggunaan while
let angka = 1;
while (angka <= 10) {
  console.log("Angka ke-" + angka);
  angka++;
}

// Contoh penggunaan do while
let x = "0";
do {
    x++;
    console.log("Infinite learning " + x);
} while (x < 10);


// Contoh program function
function sapa(nama) {
    return "Halo, " + nama + "!";
  }
  let pesanSapaan = sapa("Irene");
  console.log(pesanSapaan);