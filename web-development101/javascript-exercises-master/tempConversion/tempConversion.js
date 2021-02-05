const ftoc = function(f) {
  let c = (f - 32) * (5 / 9);
  let decimals = (c + '').split('.');
  if (c === 0) {
    return 0;
  } else if (decimals.length === 1) {
    return c;
  } else {
    return parseFloat(c.toFixed(1), 10);
  }
}

const ctof = function(c) {
  let f = (c * (9 / 5) + 32);
  let decimals = (f + '').split('.');
  if (f === 0) {
    return 0;
  } else if (decimals.length === 1) {
    return f;
  } else {
    return parseFloat(f.toFixed(1), 10);
  }
}

module.exports = {
  ftoc,
  ctof
}
