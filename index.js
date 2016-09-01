'use strict';
// last res
var res = '';
// last str
var cache;

/**
 * repeat n str
 * @param  {String} str
 * @param  {Number} n
 * @return {String}
 */
function repeatString(str, n) {
  // accelerate common use case
  if (n === 1) return str;
  if (n === 2) return str + str;

  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  }

  var total = str.length * n;
  
  if (total < res.length) {
    return res.substr(0, total);
  } else if (total === res.length) {
    return res;
  }

  // total > res.length
  while(n) {
    // n is odd
    if (n & 1) {
      res += str;
    }
    
    n >>= 1;
    if (n === 0) break;

    str += str;
  }

  return res;
}

module.exports = repeatString;
