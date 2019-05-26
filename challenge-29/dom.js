((win, doc) => {
    'use strict';

    function DOM(element) {
        return doc.querySelector(element);
    };

    DOM.prototype.on = function on(eventType, action) {
        Array.prototype.forEach.call(this.element, function (nodeElement) {
            nodeElement.addEventListener(eventType, action, false);
        });
    };

    DOM.prototype.off = function off(eventType, action) {
        Array.prototype.forEach.call(this.element, function (nodeElement) {
            nodeElement.removeEventListener(eventType, action, false);
        });
    };

    DOM.prototype.get = function get() {
        return this.element;
    };

    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
    };

    win.DOM = DOM;
})(window, document)