let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length'));
    width = parseFloat(document.getElementById('width'));

    let area = length * width;
}

document.getElementById('result').innerHTML = `The area of the rectangle is: ${area}`;