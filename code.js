function DivideandSumHelper(arr, start, end) {
    
    //If an array has only one element
    if (start === end) {
        return arr[start]; 
    }
    
    //If there are no elements 
    if (start > end) {
        return 0; 
    }

   //help split the array into three parts 
    const first = start + Math.floor((end-start + 1) /3);
    const second = start + Math.floor(2 * (end - start + 1) / 3); 

    // will find the sum recursively
    const sum1 = DivideandSumHelper(arr, start, first - 1);
    const sum2 = DivideandSumHelper(arr, first, second - 1); 
    const sum3 = DivideandSumHelper(arr, second, end); 

    //Merge them all together
    return sum1 + sum2 + sum3; 

}
    

function divideAndConquerSum(a) {
    if (!Array.isArray(a) || a.length === 0) {
        return 0; 
    }
    return DivideandSumHelper(a, 0, a.length -1);
}
