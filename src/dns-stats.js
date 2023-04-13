const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const result = {}; // empty object
  domains.forEach(domain => { // for each domain from array
    domain = domain.split(".").map(subdomain => "." + subdomain).reverse(); // 'music.yandex.ru' => ['.ru', '.yandex', '.music']
    let newDNS = "";
    domain.forEach(subdomain => { // for each subdomain of each domain
      newDNS += subdomain; // generating new DNS names
      result[newDNS] = !result[newDNS] ? 1 : ++result[newDNS]; // update the value by key in the resulting object
    });
  })
  return result;
}

module.exports = {
  getDNSStats
};
