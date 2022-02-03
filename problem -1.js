let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let sortedArray = array.sort((a, b) => {
  return a - b;
});
let newArray = [];
let ptr = sortedArray[0];
let tempArray = [];

sortedArray.forEach((element) => {
  if (ptr === element) {
    tempArray.push(element);
  } else {
    ptr = element;
    newArray.push(tempArray);
    tempArray = [];
    tempArray.push(element);
  }
});
