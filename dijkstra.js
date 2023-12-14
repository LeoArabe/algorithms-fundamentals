const graph = {
  A: [{ node: 'B', weight: 1 }, { node: 'C', weight: 4 }],
  B: [{ node: 'A', weight: 1 }, { node: 'C', weight: 2 }, { node: 'D', weight: 5 }],
  C: [{ node: 'A', weight: 4 }, { node: 'B', weight: 2 }, { node: 'D', weight: 1 }],
  D: [{ node: 'B', weight: 5 }, { node: 'C', weight: 1 }],
  //E: [{ node: 'C', weight: 9 }, { node: 'D', weight: 2 }, { node: 'F', weight: 6 }, { node: 'G', weight: 5 }],
  //F: [{ node: 'D', weight: 11 }, { node: 'E', weight: 6 }, { node: 'G', weight: 8 }],
  //G: [{ node: 'E', weight: 5 }, { node: 'F', weight: 8 }]
};


function dijkstra(graph, startNode) {
  let distances = {};
  let visited = new Set();
  let queue = [];

  for (let node in graph) {
    distances[node] = Infinity;
  }

  distances[startNode] = 0;

  queue.push({ node: startNode, weight: 0 })
  //queue.push({ node: startNode, weight: distances[startNode] })

  while (queue.length > 0) {
    queue.sort((a, b) => a.dist - b.dist);
    let currentNode = queue.shift().node
   
    if (visited.has(currentNode)) {
      continue;
    }
    visited.add(currentNode);

    let neighbors = graph[currentNode];
    console.log(currentNode)
    for (let neighbor of neighbors) {
      console.log(neighbor.node)
      let distance = distances[currentNode] + neighbor.weight;

      if (distance < distances[neighbor.node]) {
        distances[neighbor.node] = distance;
        queue.push({ node: neighbor.node, weight: distance });
        console.log(queue)
      }

    }
  }
 return distances;
}

console.log(dijkstra(graph, 'A'));

//let landMarks = graph[currentNode]


//graph[startPoint].
//console.log(wayPoints)


/*
          start Point => end Point 
sempre testar possibilidade real de caminho
               A=> direto =>D 
             caminhos possiveis
                   B => C
                   C => B 
                     B 
                     C

















function dijkstra(graph, startNode) {
  let distances = {};
  let visited = new Set();
  let queue = [];

  // Inicializa as distâncias
  for (let node in graph) {
      distances[node] = Infinity;
  }
  distances[startNode] = 0;

  queue.push({node: startNode, dist: 0});

  while (queue.length > 0) {
      // Ordena a fila para obter sempre o nó com menor distância
      queue.sort((a, b) => a.dist - b.dist);
      let currentNode = queue.shift().node;

      // Evita revisitar nós
      if (visited.has(currentNode)) {
          continue;
      }
      visited.add(currentNode);

      let neighbors = graph[currentNode];
      for (let neighbor of neighbors) {
          let distance = distances[currentNode] + neighbor.weight;
          // Atualiza a distância se encontrou um caminho mais curto
          if (distance < distances[neighbor.node]) {
              distances[neighbor.node] = distance;
              queue.push({node: neighbor.node, dist: distance});
          }
      }
  }

  return distances;
}

const graph = {
  A: [{node: 'B', weight: 1}, {node: 'C', weight: 4}],
  B: [{node: 'A', weight: 1}, {node: 'C', weight: 2}, {node: 'D', weight: 5}],
  C: [{node: 'A', weight: 4}, {node: 'B', weight: 2}, {node: 'D', weight: 1}],
  D: [{node: 'B', weight: 5}, {node: 'C', weight: 1}]
};

console.log(dijkstra(graph, 'A'));

*/