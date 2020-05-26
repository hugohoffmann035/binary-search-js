//const arrNumbers = new Array(0, 2, 3, 4, 10, 40, 44);
const arrNumbers = [0, 2, 3, 4, 10, 40, 44]; // 6

function buscaBinaria(arr = Array, L, R, x) {
  if ((R >= L)) {
    const mid = L + (R - L) / 2;

    if (arr[mid] == x) return mid;
    else if (arr[mid] > x) return buscaBinaria(arr, L, mid - 1, x);
    else return buscaBinaria(arr, mid + 1, R, x);
  } else return -1;
}

// 0 | 6 | 10

const x = 2;
const start = arrNumbers.indexOf(arrNumbers[0]);
const fim = arrNumbers.indexOf(arrNumbers[arrNumbers.length - 1]);

const bs = buscaBinaria(arrNumbers, start, fim, x);

console.log(bs);
