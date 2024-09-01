function msum(a, lo, hi) {
    if (lo === hi) return a[0]; // in the case that the sub array is only 0-1 elements long, will return the value of the element
    else if (lo + 1 === hi) return a[0] + a[1];

    var mid1 = Math.floor((lo + hi) / 3);
    var mid2 = Math.floor((mid1 + hi) / 2);

    var ls = msum(a, lo, mid1);
    var ms = msum(a, mid1 + 1, mid2);
    var rs = msum(a, mid2 + 1, hi);

    return ls + ms + rs
}

function divideAndConquerSum(a) {
    a = msum(a, 0, a.length - 1);
    return a;
}
