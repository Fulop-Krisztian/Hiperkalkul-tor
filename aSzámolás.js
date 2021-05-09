function tSzamol() {
  var tA = parseFloat(document.getElementById("tA").value);
  var tB = parseFloat(document.getElementById("tB").value);

  if (tA <= 0 || tB <= 0) {
    document.getElementById("tTerEred").value = "Hiba".toLocaleString();
    document.getElementById("tKerEred").value = "Hiba".toLocaleString();
    audio3.play();
    alert("Az oldalak hossza nem lehet nulla vagy kisebb");
  } else {
    if (tA == 30) {
      var audio1 = new Audio("Temp/Wololo.mp3");
      audio1.play();
    }
    var tTer = (tA * tB).toFixed(2);
    var tKer = (tA + tA + tB + tB).toFixed(2);

    document.getElementById("tTerEred").value = tTer.toString();
    document.getElementById("tKerEred").value = tKer.toString();
  }
}
function hSzamol() {
  var hA = parseFloat(document.getElementById("hA").value);
  if (hA <= 0) {
    document.getElementById("hTerEred").value = "Hiba".toLocaleString();
    document.getElementById("hKerEred").value = "Hiba".toLocaleString();
    alert("Az oldalak hossza nem lehet nulla vagy kisebb");
  }
  var hTer = (((Math.sqrt(3) * 3) / 2) * hA * hA).toFixed(2);
  var hKer = (hA * 6).toFixed(2);

  document.getElementById("hTerEred").value = hTer.toString();
  document.getElementById("hKerEred").value = hKer.toString();
}

function ttSzamol() {
  var ttA = parseFloat(document.getElementById("ttA").value);
  var ttB = parseFloat(document.getElementById("ttB").value);
  var ttC = parseFloat(document.getElementById("ttC").value);

  if (ttA <= 0 || ttB <= 0 || ttC <= 0) {
    document.getElementById("ttFelEred").value = "Hiba".toLocaleString();
    document.getElementById("ttTerEred").value = "Hiba".toLocaleString();
    alert("Az oldalak hossza nem lehet nulla vagy kisebb");
  } else {
    var ttF = (2 * (ttA * ttB + ttA * ttC + ttB * ttC)).toFixed(2);
    var ttT = (ttA * ttB * ttC).toFixed(2);

    document.getElementById("ttFelEred").value = ttF.toString();
    document.getElementById("ttTerEred").value = ttT.toString();
  }
}

function gSzamol() {
  var gA = parseFloat(document.getElementById("gA").value);
  var gS = parseFloat(document.getElementById("gB").value);

  if (gA <= 0 || gS <= 0) {
    document.getElementById("gFelEred").value = "Hiba".toLocaleString();
    document.getElementById("gTerEred").value = "Hiba".toLocaleString();
    alert("Az oldalak hossza nem lehet nulla vagy kisebb");
  } else {
    var gTa = gA * gA; // Az alap területe a térfogat és felület kiszámításához
    var gTp = (Math.sqrt(gS * gS - (gA / 2) * (gA / 2)) * gA) / 2; // A palást egyik háromszögének a területe a felület kiszámításához
    var gAa = Math.sqrt(gA * gA + gA * gA); // Az alap átlója a magasság kiszámításához
    var gM = Math.sqrt(gS * gS - (gAa / 2) * (gAa / 2)); // A gúla magassága a térfogat kiszámításához

    if (gS <= gAa / 2) {
      // Ha az S oldal egyenlő az alap átlójának felével, vagy annál kisebb, akkor a gúla nem szerkeszthető meg
      document.getElementById(
        "gFelEred"
      ).value = "Nem szerkeszthető".toLocaleString();
      document.getElementById(
        "gTerEred"
      ).value = "Az adatokkal".toLocaleString();
    } else {
      var gF = (gTa + gTp * 4).toFixed(2); // Az alap és a négy háromszög területe összeadva adja meg a felszínt
      var gT = ((gTa * gM) / 3).toFixed(2); // A magasság és az alap területe összeszorozva majd osztva hárommal adja meg a térfogatot

      document.getElementById("gFelEred").value = gF.toString();
      document.getElementById("gTerEred").value = gT.toString();
    }
  }
}

function nightvision() {
  //váltás a két stílus között (normális és sötét)
  if (style.getAttribute("href") == "style.css") {
    style.setAttribute("href", "nighttheme.css");
  } else {
    style.setAttribute("href", "style.css");
  }
}
