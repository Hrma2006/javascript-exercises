const palindromes = function (string) {
  string=string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  rev=string.split("").reverse().join("").toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  if(string==rev)return true
  else return false
};

// Do not edit below this line
module.exports = palindromes;

