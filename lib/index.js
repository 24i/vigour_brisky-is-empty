'use strict'

/**
 * @id isEmpty
 * @function isEmpty
 * Checks if a [vigour-base](https://www.npmjs.com/package/vigour-base) object is empty
 * @param {object} obj - the object to check for emptiness
 * @returns {boolean} empty - `true` if `obj` is considered empty, `false` otherwise
 */
module.exports = function isEmpty (obj) {
  var ret = true
  if (obj.each) {
    obj.each(function (property, key) {
      if (property.val !== null) {
        return (ret = false)
      }
    })
  } else {
    for (var key in obj) { // eslint-disable-line
      return false
    }
  }
  return ret
}
