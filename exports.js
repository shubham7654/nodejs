/* Start: Exporting multiple element */
const fn = (num) => {
  console.log("Printing in function.\n" + num);
}

const num = 34;

module.exports = {fn, num}; // We are exporting the function on this line with the export keyword.
/* End: Exporting multiple element */

/* Start: Exporting multiple element */
const arr = [45, 35];

module.exports.arr = arr;