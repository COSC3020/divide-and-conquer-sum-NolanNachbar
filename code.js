function divideAndConquerSum(a) {
    // Handle the trivial cases
    if (!Array.isArray(a) || a.length == 0) return 0;
    if (a.length === 1) return a[0];
    
    const mid1 = Math.round((a.length) /3);
    const mid2 = 2 * mid1; 
    
    const sum1 = divideAndConquerSum(a.slice(0, mid1));
    const sum2 = divideAndConquerSum(a.slice(mid1, mid2));
    const sum3 = divideAndConquerSum(a.slice(mid2));

    // Sum up the other sums
    return sum1 + sum2 + sum3;
}
