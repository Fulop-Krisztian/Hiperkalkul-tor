function tSzamol() {
  var tA = parseFloat(document.getElementById("tA").value);
  var tB = parseFloat(document.getElementById("tB").value);

  if (tA <= 0 || tB <= 0) {
    document.getElementById("tTerEred").value = "Hiba".toLocaleString();
    document.getElementById("tKerEred").value = "Hiba".toLocaleString();
    alert("Az oldalak hossza nem lehet nulla vagy kisebb");
    if (tA <= 0) {
      document.getElementById("tA").value = "".toString();
    }
    if (tB <= 0) {
      document.getElementById("tB").value = "".toString();
    }
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
    if (hA <= 0) {
      document.getElementById("hA").value = "".toString();
    }
  } else {
    var hTer = (((Math.sqrt(3) * 3) / 2) * hA * hA).toFixed(2);
    var hKer = (hA * 6).toFixed(2);

    document.getElementById("hTerEred").value = hTer.toString();
    document.getElementById("hKerEred").value = hKer.toString();
  }
}

function ttSzamol() {
  var ttA = parseFloat(document.getElementById("ttA").value);
  var ttB = parseFloat(document.getElementById("ttB").value);
  var ttC = parseFloat(document.getElementById("ttC").value);

  if (ttA <= 0 || ttB <= 0 || ttC <= 0) {
    document.getElementById("ttFelEred").value = "Hiba".toLocaleString();
    document.getElementById("ttTerEred").value = "Hiba".toLocaleString();
    alert("Az oldalak hossza nem lehet nulla vagy kisebb");
    if (ttA <= 0) {
      document.getElementById("ttA").value = "".toString();
    }
    if (ttB <= 0) {
      document.getElementById("ttB").value = "".toString();
    }
    if (ttC <= 0) {
      document.getElementById("ttC").value = "".toString();
    }
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
    if (gA <= 0) {
      document.getElementById("gA").value = "".toString();
    }
    if (gS <= 0) {
      document.getElementById("gB").value = "".toString();
    }
  } else {
    var gTa = gA * gA; // Az alap ter??lete a t??rfogat ??s fel??let kisz??m??t??s??hoz
    var gTp = (Math.sqrt(gS * gS - (gA / 2) * (gA / 2)) * gA) / 2; // A pal??st egyik h??romsz??g??nek a ter??lete a fel??let kisz??m??t??s??hoz
    var gAa = Math.sqrt(gA * gA + gA * gA); // Az alap ??tl??ja a magass??g kisz??m??t??s??hoz
    var gM = Math.sqrt(gS * gS - (gAa / 2) * (gAa / 2)); // A g??la magass??ga a t??rfogat kisz??m??t??s??hoz

    if (gS <= gAa / 2) {
      // Ha az S oldal egyenl?? az alap ??tl??j??nak fel??vel, vagy ann??l kisebb, akkor a g??la nem szerkeszthet?? meg
      document.getElementById(
        "gFelEred"
      ).value = "Nem szerkeszthet??".toLocaleString();
      document.getElementById(
        "gTerEred"
      ).value = "Az adatokkal".toLocaleString();
    } else {
      var gF = (gTa + gTp * 4).toFixed(2); // Az alap ??s a n??gy h??romsz??g ter??lete ??sszeadva adja meg a felsz??nt
      var gT = ((gTa * gM) / 3).toFixed(2); // A magass??g ??s az alap ter??lete ??sszeszorozva majd osztva h??rommal adja meg a t??rfogatot

      document.getElementById("gFelEred").value = gF.toString();
      document.getElementById("gTerEred").value = gT.toString();
    }
  }
}

function nightvision() {
  //v??lt??s a k??t st??lus k??z??tt (norm??lis ??s s??t??t)
  if (style.getAttribute("href") == "style.css") {
    style.setAttribute("href", "nighttheme.css");
  } else {
    style.setAttribute("href", "style.css");
  }
}
