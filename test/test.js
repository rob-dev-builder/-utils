var assert = require('./assert')
var data = require('../data/data')

var myFunc = require('../index.js')

var meaningOfLife = '42'

assert(2 + 2, 4, 'test are working!')

/*
 * isEmail
 */

// Uncomment when ready to test
assertIsEmail()

function isEmail (str) {
  if ((str.search('@') > -1) &&
      (str.search('.com') > -1) ||
      (str.search('.co') > -1) ||
      (str.search('.org') > -1) &&
      (str.search('.biz') > -1) ||
      (str.search('.io') > -1)
      )
      {
    return true
  }
  return false
}

function assertIsEmail () {
  assert(isEmail('user@company.com'), true, 'isEmail detects an email')
  assert(isEmail('3333@'), false, 'isEmail does not give a false positive')
  assert(isEmail('johnny.b.good'), false, 'isEmail does not give a false positive')
}

/*
 * isNumber
 */

// Uncomment when ready to test
assertIsNumber()

function isNumber (thing) {
  if (typeof (thing) === 'number') {
    return true
  }
  return false
}

function assertIsNumber () {
  assert(isNumber('42'), false, '"42" is not a number datatype')
  assert(isNumber(13), true, '13 is a number datatype')
}

/*
 * countIf
 */

// Uncomment when ready to test
assertCountIf()

function assertCountIf () {
  var isString = function (s) {
    return typeof s === 'string'
  }

  var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
  var expectedNumberCount = 4 // do you know which 4 are numbers?
  var expectedStringCount = 2
  var numberCount = myFunc.countIf(isNumber, mixedArray)
  var stringCount = myFunc.countIf(isString, mixedArray)

  assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array')
  assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')
}
/*
 * filter
 */

// Uncomment when ready to test
assertFilter()

function assertFilter () {
  var emails = myFunc.filter(isEmail, data) || []
  assert(emails.length, 44, 'filter and isEmail returns the correct number of emails')
}

/*
 * map
 */

// Uncomment when ready to test
assertMap()

function assertMap () {
  var someNumbers = [2, 4, 6]
  var expectedNumbers = [4, 8, 12]
  var timesTwo = function (num) {
    return num * 2
  }
  var actualNumbers = myFunc.map(timesTwo, someNumbers) || []
  for (var i = 0; i < expectedNumbers.length; i++) {
    assert(expectedNumbers[i], actualNumbers[i], 'number mapped correctly')
  }
}
