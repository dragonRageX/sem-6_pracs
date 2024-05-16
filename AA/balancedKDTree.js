function buildKDTree(points, depth = 0) {
    if (points.length === 0) {
        return null;
    }

    const axis = depth % points[0].length;
    points.sort((a, b) => a[axis] - b[axis]);

    const median = Math.floor(points.length / 2);

    const leftPoints = points.slice(0, median);
    const rightPoints = points.slice(median + 1);

    return {
        point: points[median],
        axis: axis,
        left: buildKDTree(leftPoints, depth + 1),
        right: buildKDTree(rightPoints, depth + 1)
    };
}

// Example usage
const points = [
    [2, 3],
    [5, 4],
    [9, 6],
    [4, 7],
    [8, 1],
    [7, 2]
];

const kdTree = buildKDTree(points);
console.log(JSON.stringify(kdTree));
