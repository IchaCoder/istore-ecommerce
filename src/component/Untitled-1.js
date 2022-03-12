/** @format */

// function findSum(array,target){
//     let prevNum;
//     let nextNum;
//     let newArray = []
//     for(let i = 0; i <= array.length -1; i++){
//         if(target - array[i] < target ) {
//             prevNum = array[i];
//             if(array.includes(target - prevNum)){
//                 nextNum = target - prevNum
//             }
//             console.log(nextNum);
//             console.log(array.indexOf(nextNum));
//             const prevNumIndex = array.indexOf(prevNum)
//             newArray.push(prevNumIndex)
//             console.log(newArray);
//         }
//         const nextNumIndex = array.indexOf(nextNum)
//     }
// }

// findSum([2,6,7,3],5)

function isPalindrome(x) {
	const xString = x.toString();
	const revString = xString.split("").reverse().join("");

	return parseInt(revString) === x;
}

isPalindrome(121);

// You can try this:
function getOutput(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let i1 = i + 1; i1 < nums.length; i1++) {
			if (nums[i] + nums[i1] == target) {
				console.log([i, i1]);
				return [i, i1];
			}
		}
	}
}

getOutput([2, 6, 1, 4], 6);

const obj = { id: 1, name: "Emma", category: "tech" };
let array = [];
array = [...array, obj];
console.log(array);

