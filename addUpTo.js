// We want to write a function which will return the calculate the sum of all the numbers from 1 up to some number n

// 1st Method:

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
let t1 = performance.now();
console.log(addUpTo(6));
let t2 = performance.now();
console.log(`Time Elapsed ${(t2 - t1) / 1000} seconds`);

// 2nd Method

function addUpToNew(n) {
  return (n * (n + 1)) / 2;
}
let t3 = performance.now();
console.log(addUpToNew(3));
let t4 = performance.now();
console.log(`Time Elapsed ${(t4 - t3) / 1000} seconds`);
