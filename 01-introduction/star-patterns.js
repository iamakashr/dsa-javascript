// ===============================
// Approach 1: Print the pattern
// ===============================
// console.log() is inside the function.
// Each row is printed immediately.
// Just call the function: starPatternPrint(5);

function starPatternPrint(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += "* ";
    }

    console.log(row);
  }
}

// starPatternPrint(5);

console.log("----------------");

// ===============================
// Approach 2: Return the pattern
// ===============================
// Build the entire pattern in a string.
// '\n' adds a new line after each row.
// Since the function returns a value,
// use console.log() outside the function.

function starPatternReturn(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += "* ";
    }

    pattern += row + "\n";
  }

  return pattern;
}

// console.log(starPatternReturn(5));


// ======================================================
// Pattern Printing Practice
// ======================================================


// ======================================================
// 1. Square Star Pattern (Print)
// Prints an n × n square using stars.
// ======================================================

function printSquareStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += "* ";
    }

    console.log(row);
  }
}

// printSquareStarPattern(5);

console.log("----------------");


// ======================================================
// 2. Square Star Pattern (Return)
// Returns an n × n square as a string.
// ======================================================

function getSquareStarPattern(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += "* ";
    }

    pattern += row + "\n";
  }

  return pattern;
}

// console.log(getSquareStarPattern(5));


// ======================================================
// 3. Right Triangle Star Pattern
// Returns a right-angled triangle using stars.
// ======================================================

function getRightTriangleStarPattern(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += "* ";
    }

    pattern += row + "\n";
  }

  return pattern;
}

// console.log(getRightTriangleStarPattern(5));


// ======================================================
// 4. Increasing Number Triangle
// Returns a triangle with numbers from 1 to each row.
// ======================================================

function getIncreasingNumberTriangle(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += j + 1;
    }

    pattern += row + "\n";
  }

  return pattern;
}

// console.log(getIncreasingNumberTriangle(5));


// ======================================================
// 5. Repeated Number Triangle
// Returns a triangle where each row contains
// the same number.
// ======================================================

function getRepeatedNumberTriangle(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += i + 1;
    }

    pattern += row + "\n";
  }

  return pattern;
}

// console.log(getRepeatedNumberTriangle(5));


// ======================================================
// 6. Inverted Number Triangle
// Returns an inverted triangle with increasing numbers.
// ======================================================

function getInvertedNumberTriangle(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - i; j++) {
      row += j + 1;
    }

    pattern += row + "\n";
  }

  return pattern;
}

// console.log(getInvertedNumberTriangle(5));


// ======================================================
// 7. Inverted Star Triangle
// Returns an inverted triangle using stars.
// ======================================================

function getInvertedStarTriangle(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - i; j++) {
      row += "* ";
    }

    pattern += row + "\n";
  }

  return pattern;
}

// console.log(getInvertedStarTriangle(5));