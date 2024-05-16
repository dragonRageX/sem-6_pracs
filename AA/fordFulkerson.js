function findAllPaths(graph, source, sink, stack) {
    const paths = [];

    while(stack.length != 0)
    {
        let current = stack.pop();
        if(current.vertex == sink)
        {
            paths.push([...current.path, current.vertex]);
        }
        else
        {
            for(let i = 0; i < graph[current.vertex].length; i++)
            if(graph[current.vertex][i] != 0)
            {
                stack.push({ vertex: i, path: [...current.path, current.vertex] });
            }
        }
    }
    return paths;
}

function findBottleNeckCapacity(path, graph)
{
    let bottleNeckCapacity = Infinity;
    for(let i = 0; i < path.length - 1; i++)   //find min. edge weight
    {
        if(graph[path[i]][path[i + 1]] < bottleNeckCapacity)
        {
            bottleNeckCapacity = graph[path[i]][path[i + 1]];
        }
    }
    return bottleNeckCapacity;
}

function updateResidualGraph(path, bottleNeckCapacity, graph)
{
    for(let i = 0; i < path.length - 1; i++)   //update edge weights in residual graph
    {
        graph[path[i]][path[i + 1]] = graph[path[i]][path[i + 1]] - bottleNeckCapacity;   //update residual capacity edge
        graph[path[i + 1]][path[i]] = graph[path[i + 1]][path[i]] + bottleNeckCapacity;   //update skew edge
    }
}

function findMaxFlow(allPaths, graph)
{
    let maxFlow = 0;
    for (const path of allPaths)
    {
        const bottleneckCapacity = findBottleNeckCapacity(path, graph);
        maxFlow += bottleneckCapacity;
        updateResidualGraph(path, bottleneckCapacity, graph);
    }
    return maxFlow;
}

const graph = [           //this graph also acts like our residual graph
    [0, 8, 14, 0, 0, 0],
    [0, 0, 14, 12, 0, 0],
    [0, 0, 0, 0, 10, 0],
    [0, 0, 0, 0, 0, 17],
    [0, 0, 0, 7, 0, 6],
    [0, 0, 0, 0, 0, 0]
];
const source = 0;
const sink = 5;

let stack = [{ vertex: source, path: [] }];   //stack for dfs. Each vertex in the stack is associated with the whole path to reach that vertex from the source

const allPaths = findAllPaths(graph, source, sink, stack);
console.log(allPaths);   //output all paths from source to sink

let maxFlow = findMaxFlow(allPaths, graph);
console.log("Max Flow: ", maxFlow);
