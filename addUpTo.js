// We want to write a function which will return the calculate the sum of all the numbers from 1 up to some number n

// 1st Method:

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(6));

// 2nd Method

function addUpToNew(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpToNew(3));
