
exports.min = function min (array) {
  return array && array.length > 0 ? Math.min.apply(null, array) : 0;
}

exports.max = function max (array) {
  return array && array.length > 0 ? Math.max.apply(null, array) : 0;
}

exports.avg = function avg (array) {
  if (array && array.length > 0) {
    let sum = 0;
    array.forEach(element => sum += element);
    return sum / array.length;
  }
  return 0;
}
