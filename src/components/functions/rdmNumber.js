export function rdmNumber(min, max) {
  let num = Math.random() * (max - min) + min;
  num = Math.round((num + Number.EPSILON) * 100) / 100;
  return num;
  }