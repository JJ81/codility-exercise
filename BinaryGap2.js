function makeBinaryCode(N){
  if(isNaN(N)){
	N = N.parseInt();
  }

  if(N < 2){
	return N;
  }

  var arr = [];
  
  while(N >= 2){
    arr.push(N%2);
    N = Math.floor(N/2);
  }
  arr.push(1);

  return arr.reverse();
}


function getMaxBinaryGap(arr){
  var zeroChecker = false, count = 0, maxCount = 0;
  
  for(var i = 1, len=arr.length; i < len ; i++){
    if(arr[i] == 1 &&  zeroChecker === true){
	  if(maxCount < count){
	  	maxCount = count;
	    count = 0;
	  }
      zeroChecker = false;
    }else if(arr[i] == 0){
      zeroChecker = true;
	  count++;
    }else if(arr[i] == 1 && zeroChecker === false){
	  count = 0;
	}else{
	  console.log('case?');
	}
  }	

  return maxCount;
}


function solution(N){
  var tmp = makeBinaryCode(N);
  console.info(tmp);
  return getMaxBinaryGap(tmp);
}


/**
  Complexity:
  expected worst-case time complexity is O(log(N));
  expected worst-case space complexity is O(1).
*/


// 단언문을 만들어서 참거짓을 출력하는 함수를 만들어서 테스트를 진행해보자.
function assertion(input, expectation){
  if(solution(input) == expectation){
    return true;
  }
  return false;
}

function checker(input, expectation){
  console.info("Input " + input + ', Expectation : ' + expectation + ', result : ' + assertion(input, expectation)  );
}


checker(10, 1);
checker(100, 2);
checker(1000, 1);
checker(10000, 3);
checker(100000, 4);
checker(100000, 4);


/*
assertion(10, 1);
assertion(100, 2);
assertion(1000, 1);
assertion(10000, 3);
assertion(100000, 4);
assertion(100000, 3);
*/


/*
console.info( solution(10) );
console.info( solution(100) );
console.info( solution(1000) );
console.info( solution(10000) );
console.info( solution(100000) );
console.info( solution(10000000) );
*/


