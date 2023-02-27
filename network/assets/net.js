d3.json("cooccurrence.json").then(function(data) {
    var nodes = [];
    var links = [];

    // Create nodes for each author
    data.forEach(function(pair) {
        var author1 = pair[0];
        var author2 = pair[1];
        if (!nodes.find(function(node) { return node.id === author1 })) {
            nodes.push({ id: author1, degree: 0 });
        }
        if (!nodes.find(function(node) { return node.id === author2 })) {
            nodes.push({ id: author2, degree: 0 });
        }
    });

    // Create links with weight greater than 10
    data.forEach(function(pair) {
        var author1 = pair[0];
        var author2 = pair[1];
        var weight = pair[2];
        if (weight > 100) {
            var source = nodes.findIndex(function(node) { return node.id === author1 });
            var target = nodes.findIndex(function(node) { return node.id === author2 });
            links.push({ source: source, target: target, weight: weight });
            nodes[source].degree++;
            nodes[target].degree++;
        }
    });

    // Create an instance of the ForceGraph function
    var graph = ForceGraph({
        nodes: nodes,
        links: links,
        nodeTitle: d => d.id,
        nodeRadius: d => Math.sqrt(d.degree) + 5,
        linkWidth: d => d.weight,
        linkDirectionalArrowLength: 4,
        linkDirectionalArrowRelPos: 1,
        linkCurvature: 0.2,
        width: window.innerWidth,
        height: window.innerHeight
    });

    // Append the graph to a container element in the HTML
    document.getElementById("graph-container").appendChild(graph);
});
