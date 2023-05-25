var funcao1 = [];
var funcao2 = [];
var entrada = [];
var tempoX = [];
var tempo;
var myChart;

for (var i = 0; i <= 100; i = i + 0.5) {
  tempoX.push(i);
}

var ctx = document.getElementById("myChart");
var labels = tempoX;
var data = {
  labels,
  datasets: [
    {
      data: funcao1,
      label: "Função 1",
      borderColor: "#00BFFF",
    },
    {
      data: funcao2,
      label: "Função 2",
      borderColor: "#DAA520",
    },
    {
      data: entrada,
      label: "Entrada",
      borderColor: "#FF0000",
    },
  ],
};
var config = {
  type: "line",
  data,
  options: {
    responsive: true,
  },
};

myChart = new Chart(ctx, config);

function calcular() {
  funcao1 = [];
  funcao2 = [];
  entrada = [];

  var numerador1 = document.getElementById("numerador1").value;

  var numerador2 = document.getElementById("numerador2").value;

  //myChart.destroy();
  var sinalSelecionado = document.getElementById("select-sinal").value;

  if (sinalSelecionado == "primeira") {
    var denominador1 = document.getElementById("denominador1").value;
    var denominador2 = document.getElementById("denominador2").value;

    for (var i = 0; i <= 100; i = i + 0.5) {
      funcao1.push(
        (numerador1 / (numerador1 + 1)) *
          (1 - 1 / Math.pow(Math.E, i / (denominador1 / (numerador1 + 1))))
      );
      funcao2.push(
        (numerador2 / (numerador2 + 1)) *
          (1 - 1 / Math.pow(Math.E, i / (denominador2 / (numerador2 + 1))))
      );
      entrada.push(1);
    }
  } else if (sinalSelecionado == "segunda") {
    var numerador1 = document.getElementById("numerador1").value;
    var denominador11 = document.getElementById("denominador11").value;
    var denominador12 = document.getElementById("denominador12").value;
    var denominador13 = document.getElementById("denominador13").value;
    var wn1 = Math.sqrt(numerador1 / (numerador1 + 1));
    var z1 = denominador12 / (numerador1 + 1) / (wn1 * 2);
    var wd1 = wn1 * Math.sqrt(1 - Math.pow(z1, 2));

    var numerador2 = document.getElementById("numerador2").value;
    var denominador21 = document.getElementById("denominador21").value;
    var denominador22 = document.getElementById("denominador22").value;
    var denominador23 = document.getElementById("denominador23").value;
    var wn2 = Math.sqrt(numerador2 / (numerador2 + 1));
    var z2 = denominador22 / (numerador2 + 1) / (wn2 * 2);
    var wd2 = wn2 * Math.sqrt(1 - Math.pow(z2, 2));

    for (var i = 0; i <= 100; i = i + 0.5) {
      funcao1.push(1 - Math.pow(Math.E, -1 * wn1 * i)) * (1 + wn1 * i);
      funcao2.push(1 - Math.pow(Math.E, -1 * wn2 * i)) * (1 + wn2 * i);

      entrada.push(1);
    }
  }

  myChart.data.datasets[0].data = funcao1;
  myChart.data.datasets[1].data = funcao2;
  myChart.data.datasets[2].data = entrada;
  myChart.update();
}

function habilitarComparacao() {
  var btn = document.getElementById("btn-comparar");
  var funcao = document.getElementById("funcao-2");
  btn.classList.add("d-none");
  funcao.classList.remove("d-none");
}
