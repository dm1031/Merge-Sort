function split(wholeArray) {

    let firstHalf = wholeArray.slice(0, wholeArray.length / 2);
    let secondHalf = wholeArray.slice(wholeArray.length / 2);
    return [firstHalf, secondHalf];
  
  }
  
  
  function merge(firstArr, secondArr) {
    
    let sortedArray = [];
  
    if (firstArr.length === 0 || secondArr.length === 0) {
      if (firstArr.length === 0) {
        return sortedArray.concat(secondArr);
      }
      else {
        return sortedArray.concat(firstArr);
      }
    }
  
    else if (firstArr[0] < secondArr[0]) {
      sortedArray = merge(firstArr.slice(1), secondArr);
      sortedArray.unshift(firstArr[0]);
    }
  
    else {
      sortedArray = merge(firstArr, secondArr.slice(1));
      sortedArray.unshift(secondArr[0]);
    }
  
    return sortedArray;
  }
  
  
  function mergeSort(arr) {
  
    if (arr.length <= 1) {
      return arr;
    }
    else {
      return merge(mergeSort(split(arr)[0]), mergeSort(split(arr)[1]));
    }
  }