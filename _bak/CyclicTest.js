function solution(A, K) {
  var result = [];

  for (var i = 0; i < K; i++) {
    result[0] = A[A.length - 1];
    
    for (var j = 0, len=A.length-1; j < len; j++) {
      result[j + 1] = A[j];
	  console.info(j + ' / ' + A);
	  console.info('value : ' + A[j]);
	  //console.info(j);
    }    
    //console.info(result);
	//A = [];
	A = result;
	result = [];
//	console.info(A);
	// j = 0;
  }
 
  return A;
}




var a = [1,2,3,4];
//console.log( solution(a, 1) );
console.log( solution(a, 2) );
//solution(a, 40);
//solution(a, 400);
//solution(a, 4000);
//solution(a, 40000);
//solution(a, 400000);
