'use strict';


// 1)
const ARR_LEN = 1001;
let arr = [];
for (let i = 0; i < ARR_LEN; ++i) {
    arr.push(Math.random());
}


// 2)
function min(a) {
    if (a.length === 0) return;
    let ans = a[0];
    for (let elem of a) {
        if (elem < ans) {
            ans = elem;
        }
    }
    return ans;
}
function max(a) {
    if (a.length === 0) return;
    let ans = a[0];
    for (let elem of a) {
        if (elem > ans) {
            ans = elem;
        }
    }
    return ans;
}
function median(a) {
    let local = a.slice();
    local.sort( (x, y) => x - y );
    let lenDiv2 = Math.floor(local.length / 2);
    if (local.length % 2 === 0) {
        return local[lenDiv2 + 1];
    }
    return (local[lenDiv2] + local[lenDiv2 + 1]) / 2;
}

console.log(`Min: ${min(arr)}`);
console.log(`Max: ${max(arr)}`);
console.log(`Median: ${median(arr)}`);


// 3)
function qsort(a, l, r) {
    if (l >= r - 1) {
        return;
    }
    let x = a[Math.floor((l + r) / 2)];
    let i = l;
    let j = r - 1;
    while (i < j) {
        while (a[i] < x) {
            ++i;
        }
        while (a[j] > x) {
            --j;
        }
        if (i >= j) {
            break;
        }
        let t = a[j];
        a[j] = a[i];
        a[i] = t;
    }
    qsort(a, l, i);
    qsort(a, i, r);
}
function isSorted(a) {
    if (a.length < 2) {
        return true;
    }
    for (let i = 1; i < a.length; ++i) {
        if (a[i] < a[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(`Is arr sorted? ${isSorted(arr)}`);
qsort(arr, 0, arr.length);
console.log(`Sorting arr...`);
console.log(`Is arr sorted? ${isSorted(arr)}`);


// 4)
let elems = document.querySelectorAll("*");
let countMap = new Map();
for (let elem of elems) {
    let elemCount = 0;
    let tagName = elem.tagName;
    if (countMap.has(tagName)) {
        elemCount = countMap.get(tagName);
    }
    countMap.set(tagName, ++elemCount);
}
for (let [key, value] of countMap) {
    console.log(key + " - " + value);
}
