'use strict';

function jumpFrog(x,y,d){
  return Math.ceil( (y-x)/d );
}

function assertion(x,y,d,expectation){
  var result = jumpFrog(x,y,d, expectation);
  console.log('Input : ' + x + ' / '+ y + ' / '+ d + ' output : ' + result + ', so it\'s ' + (result === expectation));
}

assertion(10, 85, 30, 3);
assertion(10, 100, 30, 3);
assertion(10, 130, 30, 4);
