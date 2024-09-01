function msum(x, lo, hi) {
    if (lo === hi) return x[0]; // in the case that the sub array is only 0-1 elements long, will return the value of the element
    else if (lo + 1 === hi) return x[0] + x[1];

    var mid1 = Math.floor((lo + hi) / 3);
    var mid2 = Math.floor((mid1 + hi) / 2);

    var ls = msum(x, lo, mid1);
    var ms = msum(x, mid1 + 1, mid2);
    var rs = msum(x, mid2 + 1, hi);

    return ls + ms + rs
}

function mergesum(x) {
    x = msum(x, 0, x.length - 1);
    return x;
}
