let radius = 4;
let squareSide = 5;
let triangleBase = 3;
let triangleHeight = 6;

function getAreaOfCircle(radius) {
    let area = Math.pow(radius, 2) * Math.PI;
    return area;
}

function getCircumferenceOfCircle(radius) {
    let circumference = 2 * radius * Math.PI;
    return circumference;
}

function getAreaOfSquare(squareSide) {
    let area = Math.pow(squareSide, 2);
    return area;
}

function getAreaOfTriangle(triangleBase, triangleHeight) {
    let area = (triangleHeight * triangleBase)/2
    return area;
}

console.log(getAreaOfCircle(radius));
console.log(getCircumferenceOfCircle(radius));
console.log(getAreaOfSquare(squareSide));
console.log(getAreaOfTriangle(triangleBase, triangleHeight));