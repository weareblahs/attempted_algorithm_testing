// https://leetcode.com/problems/gas-station/description/

function revolution(array, target) {
  // this function:
  // if array set as [1, 2, 3, 4, 5]
  // target (array index) is set to 3
  // then it will return [3, 4, 0, 1, 2]
  let newArray = [];
  for (let i = target; i < array.length; i++) {
    if (array[i] == array[array.length - 1]) {
      newArray.push(i);
      i = 0;
    }
    if (array[i] == array[target - 1]) {
      newArray.push(i);
      break;
    }
    newArray.push(i);
  }
  return newArray;
}

function canCompleteCircuit(gas, cost) {
  // first of all, get the difference as an array
  let diff = [];
  if (gas.length != cost.length) return -1;
  for (i = 0; i < gas.length; i++) {
    diff.push(gas[i] - cost[i]);
  }
  let fpn = -1; // first positive number
  for (difference of diff) {
    if (difference >= 0) {
      fpn = difference;
    }
  }

  if (fpn <= 0) return -1;

  let revolutions = revolution(gas, fpn);
  let total = 0;

  for (revolution of revolutions) {
    total += diff[revolution];
    index = revolution;
  }
  if (total < 0) return -1;
  if (total >= 0) return diff.indexOf(fpn);
  //...what's next?
}

// not sure, but only works up to 3 array values if less than 0
// console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])); // this does not work. it loops then it fails
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // this does work, but wrong answer

// code reference: https://www.youtube.com/watch?v=lJwbPZGo05A
function canCompleteCircuit2(gas, cost) {
  let gasSum = 0;
  let gasCost = 0;
  if (gas.length != cost.length) return -1;
  for (i = 0; i < gas.length; i++) {
    gasSum += gas[i];
    gasCost += cost[i];
  }

  if (gasSum < gasCost) {
    return -1;
  }
  let total = 0;
  let res = 0;
  for (i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    if (total < 0) {
      total = 0;
      res = i + 1;
    }
  }
  return res;
}
console.log(canCompleteCircuit2([5, 8, 2, 8], [6, 5, 6, 6]));
