function calcular(){
  var val1 = parseFloat(document.getElementById("v1").value);
  var val2 = parseFloat(document.getElementById("v2").value);
  var operator = document.getElementById("operator").value;
  var result = 0;
  var res = document.getElementById("res");

  if(isNaN(val1) || isNaN(val2)){
      res.innerHTML = "Datos nulos o incorrectos";
      if(isNaN(val1)){
          document.getElementById("v1").focus();
      } else{
          document.getElementById("v2").focus();
      }
      return;
  }

  switch(operator) {
      case "sumar":
          result = val1 + val2;
          break;
      case "restar":
          result = val1 - val2;
          break;
      case "multiplicar":
          result = val1 * val2;
          break;
      case "dividir":
          if (val2 !== 0) {
              result = val1 / val2;
          } else {
              res.innerHTML = "No se puede dividir por cero";
              return;
          }
          break;
      default:
          res.innerHTML = "Operador no válido";
          return;
  }

  res.innerHTML = result;
}