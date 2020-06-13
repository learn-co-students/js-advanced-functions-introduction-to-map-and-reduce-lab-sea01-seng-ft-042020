function mapToNegativize(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * -1);
  }
  return newArr;
}

function mapToNoChange(sourceArry) {
  let newArr = sourceArry;
  return newArr;
}

function mapToDouble(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * 2);
  }
  return newArr;
}

function mapToSquare(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] ** 2);
  }
  return newArr;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = 0;
  for (let i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i];
  }
  return total + startingPoint;
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === false) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
          return true;
        }
      }
      return false;
}