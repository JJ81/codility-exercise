/*
  Assumption
  N and K are integers within the range [0..100];
  each element of array A is an integer within the range [−1,000..1,000].
*/
//var arr = [0,1,2,3,4];

// 가장 뒤애 있는 수를 가장 앞으로 가져오는 방법 중 순차적인 방법이다.
function reverseFinal(arr){
	var tmp = null;
	var pointer = arr.length-1;

	while(pointer > 0){
		tmp = arr[pointer-1];
		arr[pointer-1] = arr[pointer];
		arr[pointer] = tmp;
		pointer--;
		//console.info(arr);
	}
	return arr;
}

function solution(arr, times){
	if(arr instanceof Array == false) {
		throw new Error('TypeError is occurred in Array');
	}

	if(arr.length <= 1){
		return arr;
	}

	while(times > 0){
		arr = reverseFinal(arr);
		times--;
	}
	return arr;
} 

function compareArrayElement(arr, arr2){
	if(arr.length !== arr2.length){
		return false;
	}

	for(var i=0,len=arr.length;i<len;i++){
		if(arr[i] !== arr2[i]){
			return false;
		}
	}	

	return true;
}


function assertion(arr, times, expectation){
	var result = solution(arr, times);
	console.info('result : ' + arr.toString() + ' / expectation : ' + expectation.toString() + ', So it\'s ' + compareArrayElement(result, expectation) );
}

//assertion( [0,1,2,3,4], 1, [4,0,1,2,3] );
//assertion( [0,1,2,3,4], 2, [3,4,0,1,2] );
//assertion( [0,1,2,3,4], 3, [2,3,4,0,1] );
//assertion( [0,1,2,3,4], 4, [1,2,3,4,0] );
//assertion( [0,1,2,3,4], 5, [0,1,2,3,4] );


/*
assertion( [1,2,3,4], 4, [1,2,3,4] );
assertion( [1,2,3,4], 40, [1,2,3,4] );
assertion( [1,2,3,4], 400, [1,2,3,4] );
assertion( [1,2,3,4], 4000, [1,2,3,4] );
assertion( [1,2,3,4], 40000, [1,2,3,4] );
assertion( [1,2,3,4], 400000, [1,2,3,4] );
assertion( [1,2,3,4], 4000000, [1,2,3,4] );
assertion( [1,2,3,4], 40000000, [1,2,3,4] );
*/



assertion( [1], 40000000, [1,2,3,4] );






