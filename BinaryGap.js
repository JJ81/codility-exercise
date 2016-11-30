function makeBinaryCode(arr, decimal){
  if(decimal < 2){
    arr.push(1);
    arr.reverse();
    return;
  }
  
  if(isNaN(decimal)){
      decimal = parseInt(decimal);
  }
  
  arr.push(decimal%2);
  decimal = Math.floor(decimal/2);
  makeBinaryCode(arr, decimal);
}

function searchBinary(arr){
  var 
  startChecker = false,
  zeroChecker = false,
  count = 0;
  
  for(var i = 0, len=arr.length; i < len ; i++){
    if(arr[i] == 1 && startChecker === false){
      startChecker = true;
      zeroChecker = false;
    }else if(arr[i] == 1 && startChecker === true && zeroChecker === true){
      count++;
      zeroChecker = false;
    }else if(arr[i] == 0){
      zeroChecker = true;
    }else{
      // console.log('?');
    }
  }
  return count;
}


function solution(N){
  var tmp = [];
  makeBinaryCode(tmp, N);
  console.info(tmp);
  return searchBinary(tmp);
}


// console.info( solution(100) );

/**
  Complexity:
  expected worst-case time complexity is O(log(N));
  expected worst-case space complexity is O(1).
*/


// 단언문을 만들어서 참거짓을 출력하는 함수를 만들어서 테스트를 진행해보자.
function assertion(input, expectation){
  if(solution(input) === expectation){
    return true;
  }
  return false;
}

function checker(input, result){
  console.info("Input " + input + ', Expectation : ' + solution(input) + ', result : ' + assertion(input, result) );
}

checker(100, 1);
checker(1000, 1);
checker(10000, 2);
checker(10000, 2);
checker(100000, 2);






