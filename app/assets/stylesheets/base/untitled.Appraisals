def dijkstra(graph, source)
  dist = []
  prev = []
  q = DataStructure.new()

  graph.nodes.each do |node|
    dist[node] = infinity
    prev[node] = nil
    q << node
  end

  dist[source] 0
  source.visited = true

  until q.empty?
    current = q.extract_min_dist_node
    q.remove(current)
    current.out_nodes.each do |neighbor|
      alt_dist = weight(current, neighbor) + dist[current]

      if alt_dist < dist[neighbor]
        distneighbor] = alt_dist
        prev[neighbor] = current
  end
end