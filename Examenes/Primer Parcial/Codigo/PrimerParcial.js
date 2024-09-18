function areaCirculo(radio) {
  if (radio < 0) {
      return NaN;
  }
  let area = Math.PI * Math.pow(radio, 2);
  return area;
}

function primo(a) {
  for (let i=2; i<(a/2); i++) {
    if (a % i == 0) {
      return false;
    }
  }
  if(a<0){
    return NaN;
  }
  return true;
}

module.exports = {areaCirculo, primo };
