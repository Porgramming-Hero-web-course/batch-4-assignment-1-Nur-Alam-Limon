"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return 3.1416 * shape.radius * shape.radius;
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    return 0;
}
console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }));
