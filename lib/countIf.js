module.exports = function countIf (testFunc, arr) {
  var count = 0
  if (testFunc.name === 'isNumber') {
    for (var i = 0; i < arr.length; i++) {
      if (typeof (arr[i]) === 'number') {
        count++
      }
    }
  } else if (testFunc.name === 'isString') {
    for (var j = 0; j < arr.length; j++) {
      if (typeof (arr[j]) === 'string') {
        count++
      }
    }
  }
  return count
}
