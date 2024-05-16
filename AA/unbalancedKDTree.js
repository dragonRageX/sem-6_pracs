let dimensions = 2;

let points = [
    { left: null, point: [21, 42], right: null }, 
    { left: null, point: [10, 100], right: null }, 
    { left: null, point: [15, 200], right: null }, 
    { left: null, point: [20, 50], right: null }, 
    { left: null, point: [20, 300], right: null }
];

let root = null;
function insert(objectPointToBeInserted, level = 0)
{
    let current;
    if(!root)
    {
        root = objectPointToBeInserted;
        current = root;
    }
    else
    {
        current = root;
        while(current.left || current.right)
        {
            if(objectPointToBeInserted.point[level] > current.point[level])   //move right
            {
                if (!current.right) {   //if current.right does not exist, append the new point to the right of the current point
                    current.right = objectPointToBeInserted.point;
                    return;
                }
                else
                {
                    current = points.find((object) => {
                        if(JSON.stringify(object.point) === JSON.stringify(current.right))
                        {
                            return object;
                        }
                    });
                }
            }
            else if(objectPointToBeInserted.point[level] <= current.point[level])   //move left
            {
                if (!current.left) {   //if current.left does not exist, append the new point to the left of the current point
                    current.left = objectPointToBeInserted.point;
                    return;
                }
                else
                {
                    current = points.find((object) => {
                        if(JSON.stringify(object.point) === JSON.stringify(current.left))
                        {
                            return object;
                        }
                    });
                }
            }
            level = (level + 1) % dimensions;
        }

        if(objectPointToBeInserted.point[level] > current.point[level])   //append the new point to the right of the current point
        {
            current.right = objectPointToBeInserted.point;
        }
        else if(objectPointToBeInserted.point[level] <= current.point[level])   //append the new point to the left of the current point
        {
            current.left = objectPointToBeInserted.point;
        }
    }
}

for(let i = 0; i < points.length; i++)
{
    insert(points[i], 0);
}

console.log(JSON.stringify(points));