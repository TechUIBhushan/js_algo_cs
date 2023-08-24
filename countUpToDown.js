function countUpToDown(n) {
  console.log("Goning Up");
  for (let i = 0; i <= n; i++) {
    console.log(`Counting ${i}`);
  }
  console.log("At the top going down");
  for (let j = n; j >= 0; j--) {
    console.log(`${j}...`);
  }
  console.log("Back down. Bye");
}

countUpToDown(10);
