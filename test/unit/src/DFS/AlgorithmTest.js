"use strict";

define(["js/src/DFS/Node", "js/src/DFS/Algorithm"], function (Node, Algorithm) {

    module("DFS/Algorithm");

    test("Test search", function () {
        var node1 = new Node(1),
            node2 = new Node(2),
            node3 = new Node(3),
            node4 = new Node(4),
            node5 = new Node(5),
            node6 = new Node(6),
            node7 = new Node(7),
            node8 = new Node(8),
            node9 = new Node(9),
            node10 = new Node(10),
            node11 = new Node(11),
            node12 = new Node(12),
            dfs = new Algorithm(),
            result,
            route;

        node1.addChild(node2);
        node1.addChild(node7);
        node1.addChild(node8);
        node2.addChild(node3);
        node2.addChild(node6);
        node3.addChild(node4);
        node3.addChild(node5);
        node8.addChild(node9);
        node8.addChild(node12);
        node9.addChild(node10);
        node9.addChild(node11);

        result = dfs.search(7, node1);
        strictEqual(result.getValue(), 7);

        route = dfs.getLastRoute();
        deepEqual(route, [1, 2, 3, 4, 5, 6, 7]);
    });
});