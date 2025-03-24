document.addEventListener("DOMContentLoaded", function () {
  // Dohvaćanje forme
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Sprječava ponovno učitavanje stranice

    // Dohvaćanje unesenih podataka
    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;
    let email = document.getElementById("email").value;
    let poruka = document.getElementById("poruka").value;

    // Prikaz podataka u alert prozoru
    alert(
      `Podaci poslani!\nIme: ${ime}\nPrezime: ${prezime}\nEmail: ${email}\nPoruka: ${poruka}`
    );

    // Opcionalno: Resetiraj formu nakon slanja
    if (ime != "" || prezime != "" || email != "" || poruka != "") form.reset();
  });
});
