"use strict";

define([], function () {

    return function (theValue) {
        var value = theValue,
            children = [];

        this.addChild = function (theChild) {
            children.push(theChild);
        };

        this.hasChildren = function () {
            return children.length > 0;
        };

        this.getChildren = function () {
            return children;
        };

        this.getValue = function () {
            return value;
        };
    };

});