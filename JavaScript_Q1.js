function poli(strin) {
  var myarr = strin.split("");
  var myarr2 = myarr.reverse();

  for (var i = 0; i < myarr.length; i++) {
    if (myarr[i] === myarr2[i]) {
    } else {
      return false;
    }
  }
  return true;
}
console.log(poli("123"));
