function multiplyArray (array) {
    var number=1;
    for (var i=0; i<array.length; i++) {
        number = number * array[i];
    } 
    return number;
}
console.log(multiplyArray([2,3,5]));