document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.oninput = () => {
    if (input.value.length > input.maxLength)
      input.value = input.value.slice(0, input.maxLength);
  };
});

let inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach((num, index) => {
  num.dataset.id = index;

  num.addEventListener("keypress", () => {
    if (event.key === "Enter") {
      inputs[parseInt(num.dataset.id) + 1].focus();
    }
  });
});

let fild1 = document.getElementById("TdeqD");
window.onload = function () {
  fild1.focus();
};

let loader = document.querySelector(".loader");
let body = document.querySelector(".html");

let Final = (document.getElementById("BtnDone").onclick = function () {
  let first, secound, result, tp, Last;

  loader.style.display = "inline";
  body.style.opacity = "0.2";

  setTimeout(() => {
    loader.style.display = "none";
    body.style.opacity = "1";
  }, 1000);

  // first td
  let TdeqD = document.getElementById("TdeqD").value,
    TdeqT = document.getElementById("TdeqT").value,
    TraitTd = document.getElementById("TraitTd").value;

  // first Exam

  let ExameqD = document.getElementById("ExameqD").value,
    ExameqT = document.getElementById("ExameqT").value,
    TraitExam = document.getElementById("TraitExam").value;

  // Secound td

  let TdFonct = document.getElementById("TdFonct").value,
    TdElec = document.getElementById("TdElec").value;

  // Secound Exam

  let ExamFonct = document.getElementById("ExamFonct").value,
    ExamElec = document.getElementById("ExamElec").value;

  // Third td

  let TdMaint = document.getElementById("TdMaint").value;

  // Third Exam

  let ExamMaint = document.getElementById("ExamMaint").value;

  // les tp

  let TpInstru = document.getElementById("TpInstru").value,
    TraitTp = document.getElementById("TraitTp").value,
    TpFonct = document.getElementById("TpFonct").value,
    TpElec = document.getElementById("TpElec").value;

  // Other modules

  let Projet = document.getElementById("Projet").value,
    Stage = document.getElementById("Stage").value,
    Anglais = document.getElementById("Anglais").value;

  // first calc

  let E_Diagnostic = TdeqD * 0.4 + ExameqD * 0.6;
  let E_Traitement = TdeqT * 0.4 + ExameqT * 0.6;
  let Traitemenet = TraitTd * 0.4 + TraitExam * 0.6;

  // secound calc

  let Fonction = (TdFonct * 0.4 + ExamFonct * 0.6) * 2;
  let Electronic = (TdElec * 0.4 + ExamElec * 0.6 + TpElec * 1) ;

  // Third calc

  let Maintenance = TdMaint * 0.4 + ExamMaint * 0.6;

  // My Array

  let inputsvalue = [
    TdeqD,
    TdeqT,
    TraitTd,
    ExameqD,
    ExameqT,
    TraitExam,
    TdFonct,
    TdElec,
    ExamFonct,
    ExamElec,
    TdMaint,
    ExamMaint,
    TraitTp,
    TpInstru,
    TpFonct,
    TpElec,
    Projet,
    Stage,
    Anglais,
  ];
  console.log(inputsvalue);
  var otherresult = inputsvalue.every(function (value) {
    return (value != "") & (value <= 20) & (value >= 0);
  });

  // General First calc

  first = (E_Diagnostic * 1 + E_Traitement * 1 + Traitemenet * 1) / 3;

  // General secound calc

  secound = (Fonction * 1 + Electronic * 1) / 4;

  //General tp calc

  tp = (TpInstru * 1 + TraitTp * 1 + TpFonct * 1) / 3;

  //  Last :

  Last = (Projet * 3 + Stage * 2 + Maintenance * 1) / 6;

  //

  result = (first * 3 + secound * 4 + tp * 3 + Last * 6 + Anglais * 1) / 17;

  let erreur = document.getElementById("erreur");

  if (otherresult) {
    erreur.style.display = "none";
    setTimeout(() => {
      document.getElementById("Hresult").textContent = `${result.toFixed(2)}`;
      document.getElementById("Hresult1").textContent = `${first.toFixed(2)}`;
      document.getElementById("Hresult2").textContent = `${secound.toFixed(2)}`;
      document.getElementById("Hresult4").textContent = `${Last.toFixed(2)}`;
      document.getElementById("Hresult3").textContent = `${tp.toFixed(2)}`;
      document.getElementById("spDiagno").textContent = `  ${(E_Diagnostic /1).toFixed(
        2
      )}`;
      // ############################################
      let span = document.querySelector(".card10m p:last-of-type");
      if (span.textContent < 10) {
        span.style.color = "red";
      } else {
        span.style.color = "green";
      }
      let span1 = document.querySelector(".card11m p:last-of-type");
      if (span1.textContent < 10) {
        span1.style.color = "red";
      } else {
        span1.style.color = "green";
      }

      let span2 = document.querySelector(".card12m p:last-of-type");
      if (span2.textContent < 10) {
        span2.style.color = "red";
      } else {
        span2.style.color = "green";
      }
      let span3 = document.querySelector(".card13m p:last-of-type");
      if (span3.textContent < 10) {
        span3.style.color = "red";
      } else {
        span3.style.color = "green";
      }
      let span4 = document.querySelector(".card14m p:last-of-type");
      if (span4.textContent < 10) {
        span4.style.color = "red";
      } else {
        span4.style.color = "green";
      }
      // ############################################
    }, 1000);

    document.getElementById("spTrait").textContent = ` ${(E_Traitement / 1).toFixed(
      2
    )}`;
    document.getElementById("sptr").textContent = ` ${(Traitemenet / 1).toFixed(
      2
    )}`;
    document.getElementById("spFonc").textContent = ` ${(
      Fonction / 2
    ).toFixed(2)}`;
    document.getElementById("spElectro").textContent = ` ${(
      Electronic / 2
    ).toFixed(2)}`;
    document.getElementById("spProjet").textContent = ` ${(
      Projet / 1
    ).toFixed(2)}`;
    document.getElementById("spStage").textContent = ` ${(
      Stage / 1
    ).toFixed(2)}`;
    document.getElementById("spaMaint").textContent = ` ${(
      Maintenance / 1
    ).toFixed(2)}`;

    setTimeout(() => {
      let ue1 = document.getElementById("ue1");
      let ul1 = document.getElementById("ul1");

      ul1.style.display = "inline";
      ue1.style.paddingBottom = "5px";
      ue1.style.borderBottom = "2px solid #22c55e";

      let ue2 = document.getElementById("ue2");
      let ul2 = document.getElementById("ul2");

      ul2.style.display = "inline";
      ue2.style.paddingBottom = "5px";
      ue2.style.borderBottom = "2px solid #f59e0b";

      let ue3 = document.getElementById("ue3");
      let ul3 = document.getElementById("ul3");

      ul3.style.display = "inline";
      ue3.style.paddingBottom = "5px";
      ue3.style.borderBottom = "2px solid purple";
    }, 1000);
  } else {
    ul1.style.display = "none";
    ul2.style.display = "none";
    ul3.style.display = "none";
    erreur.style.display = "block";

    document.getElementById("Hresult").textContent = "...";
    document.getElementById("Hresult1").textContent = "...";
    document.getElementById("Hresult2").textContent = "...";
    document.getElementById("Hresult4").textContent = "...";
    document.getElementById("Hresult3").textContent = "...";
    document.getElementById("spcap").textContent = "...";
  }
});
