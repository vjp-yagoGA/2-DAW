let arr = [2, 3, 4, 5];
console.log(arr.join("#"));   


arr.unshift(0, 1);
console.log(arr.join("#"));   


arr.push(6, 7, 8);
console.log(arr.join("#"));   


arr.splice(3, 3);
console.log(arr.join("#"));   


arr.splice(arr.length - 1, 0, "A", "B");
console.log(arr.join("#"));  
