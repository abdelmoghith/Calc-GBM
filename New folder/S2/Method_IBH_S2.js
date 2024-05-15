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

let fild1 = document.getElementById("TdStructure");
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
  let TdStructure = document.getElementById("TdStructure").value,
    TdIng = document.getElementById("TdIng").value;

  // first Exam

  let ExamStructure = document.getElementById("ExamStructure").value,
    ExamIng = document.getElementById("ExamIng").value;

  // Secound td
  let TdAnalyse = document.getElementById("TdAnalyse").value,
    TdElec = document.getElementById("TdElec").value;

  // Secound Exam

  let ExamAnalyse = document.getElementById("ExamAnalyse").value,
    ExamElec = document.getElementById("ExamElec").value;

  // Third td

  let TdEquip = document.getElementById("TdEquip").value;

  // Third Exam

  let ExamEquip = document.getElementById("ExamEquip").value;

  // les tp

  let TpStructure = document.getElementById("TpStructure").value,
    TpIng = document.getElementById("TpIng").value,
    TpAnalyse = document.getElementById("TpAnalyse").value;

  // Other modules

  let Projet = document.getElementById("Project").value,
    Stage = document.getElementById("Stage").value,
    Anglais = document.getElementById("Anglais").value;

  // first calc

  let Structure = (TdStructure * 0.4 + ExamStructure * 0.6) * 2;
  let Ingenierie = (TdIng * 0.4 + ExamIng * 0.6) * 2;

  // secound calc

  let Analyse = TdAnalyse * 0.4 + ExamAnalyse * 0.6;
  let Electronic = TdElec * 0.4 + ExamElec * 0.6;

  // Third calc

  let Equipements = TdEquip * 0.4 + ExamEquip * 0.6;

  // My Array

  let inputsvalue = [
    TdStructure,
    TdIng,
    ExamStructure,
    ExamIng,
    TdAnalyse,
    TdElec,
    ExamAnalyse,
    ExamElec,
    TdEquip,
    ExamEquip,
    TpStructure,
    TpIng,
    TpAnalyse,
    Projet,
    Stage,
    Anglais,
  ];
  console.log(inputsvalue);
  var otherresult = inputsvalue.every(function (value) {
    return (value != "") & (value <= 20) & (value >= 0);
  });

  // General First calc

  first = (Structure * 1 + Ingenierie * 1) / 4;

  // General secound calc

  secound = (Analyse * 1 + Electronic * 1) / 2;

  //General tp calc

  tp = (TpStructure * 2 + TpIng * 1 + TpAnalyse * 1) / 4;

  //  Last :

  Last = (Projet * 3 + Stage * 2 + Equipements * 1) / 6;

  //

  result = (first * 4 + secound * 2 + tp * 4 + Last * 6 + Anglais * 1) / 17;

  let erreur = document.getElementById("erreur");

  if (otherresult) {
    erreur.style.display = "none";
    setTimeout(() => {
      document.getElementById("Hresult").textContent = `${result.toFixed(2)}`;
      document.getElementById("Hresult1").textContent = `${first.toFixed(2)}`;
      document.getElementById("Hresult2").textContent = `${secound.toFixed(2)}`;
      document.getElementById("Hresult4").textContent = `${Last.toFixed(2)}`;
      document.getElementById("Hresult3").textContent = `${tp.toFixed(2)}`;

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
    document.getElementById("spStructure").textContent = `  ${(
      Structure / 2
    ).toFixed(2)}`;
    document.getElementById("spIngenierie").textContent = ` ${(
      Ingenierie / 2
    ).toFixed(2)}`;
    document.getElementById("spAnalyse").textContent = ` ${(
      Analyse / 1
    ).toFixed(2)}`;
    document.getElementById("spElectro").textContent = ` ${(
      Electronic / 1
    ).toFixed(2)}`;
    document.getElementById("spProjet").textContent = ` ${(Projet / 1).toFixed(
      2
    )}`;
    document.getElementById("spStage").textContent = ` ${(Stage / 1).toFixed(
      2
    )}`;
    document.getElementById("spEquipement").textContent = ` ${(
     ( Equipements / 1)
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
  }
});
