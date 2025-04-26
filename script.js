//your JS code here. If required.
// Function that returns a promise resolving with the initial array after 3 seconds
function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter even numbers with 1 second delay
function filterEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      document.getElementById('output').textContent = evenNumbers.join(',');
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply numbers by 2 with 2 second delay
function multiplyByTwo(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = arr.map(num => num * 2);
      document.getElementById('output').textContent = multiplied.join(',');
      resolve(multiplied);
    }, 2000);
  });
}

// Main function to chain the promises
function manipulateArray() {
  getInitialArray()
    .then((array) => filterEvenNumbers(array))
    .then((evenArray) => multiplyByTwo(evenArray))
    .catch((error) => console.error('Error:', error));
}

// Start the manipulation when the page loads
window.onload = manipulateArray;
