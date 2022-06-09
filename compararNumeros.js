function checkNums(n1, n2) {
  console.log(`Soma de ${n1} +${n2} = ${n1 + n2}`);
  n1 == n2
    ? console.log("Numeros IGUAIS")
    : console.log("Numeros Diferentes: (" + n1 + " " + "e " + n2 + ")");

  if (n1 + n2 > 10) {
    console.log("MAIOR que 10");
  } else {
    console.log("MENOR que 10");
  }

  if (n1 + n2 < 20) {
    console.log("MENOR que 20");
  } else {
    console.log("MAIOR que 20");
  }
}
console.log(checkNums(1, 1));
