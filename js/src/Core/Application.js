"use strict";

define(["DFS/Node"], function (Node) {

    return function () {

        this.run = function () {
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
                node12 = new Node(12);

            node1.addChild(node2, node7, node8);
            node2.addChild(node3, node6);
            node3.addChild(node4, node5);
            node8.addChild(node9, node12);
            node9.addChild(node10, node11);

            console.log("hello");
        };

    };

});