function isEven(number) {
  if (number < 0) { return false}

  return number === 0 ? true : isEven(number - 2);
}

function countsBs(value) {
  let counts = 0;
  value.split('').forEach((letter) => {if (letter === 'B') {counts++}});
  return counts;
}

function countsChar(value, characters) {
  let counts = 0;
  value.split('').forEach((letter) => {if (letter === String.fromCharCode(characters)) {counts++}});
  return counts;
}

console.log(countsChar('olenaoo', '111'));
