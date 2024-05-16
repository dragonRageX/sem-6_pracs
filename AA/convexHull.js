let points = [
    { x: 2, y: 7 },
    { x: 3, y: 3 },
    { x: 7, y: 6 },
    { x: 9, y: 1 },
    { x: 10, y: 4 }
];

let prioritizedPoints = points.sort((a, b) => ((a.y / a.x) - (b.y / b.x)));

console.log("Prioritized Points: ", prioritizedPoints);

let stack = [];
stack.push(prioritizedPoints[0]);
stack.push(prioritizedPoints[1]);

function isAntiClockwise(startPoint, endPoint, testPoint)
{
    if(((endPoint.x - startPoint.x) * (testPoint.y - startPoint.y) - (endPoint.y - startPoint.y) * (testPoint.x - startPoint.x)) > 0)   //testPoint is anti-clockwise to line segment formed by startPoint to endPoint
    {
        return true;
    }
    else
    {
        return false;
    }
}

for(let i = 2; i < prioritizedPoints.length; i++)
{
    while(stack.length > 1 && !isAntiClockwise(stack[stack.length - 2], stack[stack.length - 1], prioritizedPoints[i]))
    {
        stack.pop();
    }
    stack.push(prioritizedPoints[i]);
}

if(stack.length > 2)
{
    console.log("Convex Hull will be formed with the points", stack);
}
else
{
    console.log("Convex Hull could not be formed.");
}