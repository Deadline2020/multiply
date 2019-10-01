module.exports = function multiply(first, second) {
  const numberA = first.split("").reverse();
  const numberB = second.split("").reverse();
  let resultNumber = [0];
  let inTheMind;
  let temp;
  for (let a = 0; a < numberA.length; a++) {
    inTheMind = 0;
    for (let b = 0; b < numberB.length; b++) {
      temp = numberA[a] * numberB[b] + inTheMind + (resultNumber[a + b] || 0);
      resultNumber.splice(a + b, 1, temp ? temp % 10 : 0);
      inTheMind = temp ? Math.floor(temp / 10) : 0;
      if (b === numberB.length - 1 && inTheMind) resultNumber.splice(a + b + 1, 1, inTheMind);
    }
  }
  return resultNumber.reverse().join("");
}
