/**
  @ N : integer
  @ return : unpaired element
*/
function solution(arr){
  var tmp = [];
  for(var i=0,len=arr.length;i<len;i++){
    tmp = compareAdjustArray(tmp, arr[i]);
  }
  return tmp[0];
}

function compareAdjustArray(arr, element){
  
  if(arr.constructor.name !== 'Array'){
    console.error('Inserted object is not Array');
    return;
  }
  
  if(arr.length === 0){
    arr.push(element);
    return arr;
  }
  
  for(var i=0,len=arr.length;i<len;i++){
    if(arr[i] == element.toString() || arr[i] === element.toString()){
      arr.splice(i, 1);
      return arr;
    }else{
      arr.push(element);
      return arr;
    }
  }
}


//console.info(solution(_arr));
//console.info(solution(_arr2));

function assertion(arr, expectation){
  var ret = solution(arr);
  var bool = (ret === expectation);
  
  console.info('Input : ' + arr + ' / output : ' + ret + ', So it\'s ' + bool);
}


// Now let's test my function
var _arr = [9,3,9,3,9,7,9]; // 7
var _arr2 = [9,2,9,2,9,10,10]; // 9


assertion(_arr, 7);
assertion(_arr2, 9);



