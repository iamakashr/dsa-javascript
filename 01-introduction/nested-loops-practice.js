// 1. Basic nested loop

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

console.log("----------------");

// 2. Inner loop depends on outer loop

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

console.log("----------------");

// 3. Using <=

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

console.log("----------------");

// 4. Reverse outer loop

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

console.log("----------------");

// 5. Reverse inner loop

for (let i = 0; i < 5; i++) {
  for (let j = i; j >= 0; j--) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

console.log("----------------");

// 6. Both loops in reverse

for (let i = 5; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
