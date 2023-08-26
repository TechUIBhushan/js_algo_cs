function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(8);

function logMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logMost5(3);
