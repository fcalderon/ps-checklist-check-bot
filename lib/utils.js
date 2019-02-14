/** @namespace require */
/** @namespace module */

/**
 * Scans the given string for checks
 *
 * @param body the text to scan for the checks
 * @returns {{name: string, required: boolean}[]}
 */
function extractChecks (body) {
  return [
    { name: '', required: false },
    { name: '', required: true }
  ]
}

module.exports = {
  extractChecks
}
