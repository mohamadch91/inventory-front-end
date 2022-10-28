
export const separator = (x) => {
  if (x === undefined || x === null || x==="") {
    return;
  }
  x = parseInt(x);
  return thousandSeparator(x);
};
/**
 * @param  {Integer} n
 * @param  {BOOL} sep
 * check need seperator or not
 */
function thousandSeparator(n, sep) {
  function reverse(text) {

    return text.split("").reverse().join("");
  }

  var rx = /(\d{3}(?!.*\.|$))/g;

  if (!sep) {
    sep = " ";
  }

  return reverse(reverse(n.toString()).replace(rx, "$1" + sep));
}
