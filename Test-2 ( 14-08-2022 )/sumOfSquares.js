function sumOfSquare(array) {
    let sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log(sumOfSquare([0,1,2,3,4])); 