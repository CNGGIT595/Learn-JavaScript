let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;

 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
function groceryTracker () {
  let a = parseFloat(document.getElementById('grocery1').value);
  let b = parseFloat(document.getElementById('grocery2').value);
  let c = parseFloat(document.getElementById('grocery3').value);
  let totalAmount = calculateGrocery(a,b,c)
  document.getElementById('TotalAmount').innerText = `The total amount is: ${totalAmount}`;
}
function calculateGrocery(a, b, c) {
  return totalAmount = a + b + c ;
}