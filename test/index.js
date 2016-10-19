'use strict'
const test = require('tape')
const base = require('brisky-base')
const isEmpty = require('../')
const testCases = [
// ['object', expectedResult]
  [{}, true],
  [{ a: true }, false],
  [base({}), true],
  [base({ a: 'a' }), false],
  [base({ a: { val: null } }), true],
  [base({ a: { val: void 0 } }), false],
  [base({ properties: { shawn: true }, shawn: {} }), true]
]

test('isEmpty - base', t => {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isEmpty(item[0]), item[1], 'isEmpty(' + item[0] + ') === ' + item[1])
  })
})
