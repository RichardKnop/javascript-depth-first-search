"use strict";

define([], function () {

    return function () {

        var that = this, route;

        function recursiveSearch(searchFor, node) {
            that.addRoutePoint(node.getValue());
            if (searchFor === node.getValue()) {
                return node;
            }
            var i, children = node.getChildren(), child, found;
            for (i = 0; i < children.length; i += 1) {
                child = children[i];
                found = recursiveSearch(searchFor, child);
                if (found) {
                    return found;
                }
            }
        }

        this.addRoutePoint = function (point) {
            route.push(point);
        };

        this.search = function (searchFor, node) {
            var result;
            route = [];
            result = recursiveSearch(searchFor, node);
            if (result) {
                return result;
            }
            throw "'" + searchFor + "' not found";
        };

        this.getLastRoute = function () {
            return route;
        };

    };

});