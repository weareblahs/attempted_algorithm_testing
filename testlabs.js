function test() {
  let array = [3, 3, 4];
  let target = 2;
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

console.log(test());
