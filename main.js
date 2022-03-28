function squareDigits(num){
    let arr = num.toString().split('').map( elem => elem * elem)
    return Number(arr.join(''))
  }

console.log(squareDigits(9119)); // 911191