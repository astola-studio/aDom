(function(global) {
    'use strict';
    function aDom(selector) {
        if (!(this instanceof aDom)) {
            return new aDom(selector);
        }
        this.elements = document.querySelectorAll(selector);
    }
    function each(elements, callback) {
        Array.prototype.forEach.call(elements, callback);
    }
    aDom.prototype.addClass = function(className) {
        each(this.elements, function(element) {
            element.classList.add(className);
        });
        return this;
    };
    aDom.prototype.removeClass = function(className) {
        each(this.elements, function(element) {
            element.classList.remove(className);
        });
        return this;
    };
    aDom.prototype.toggleClass = function(className) {
        each(this.elements, function(element) {
            element.classList.toggle(className);
        });
        return this;
    };
    aDom.prototype.css = function(property, value) {
        if (value === undefined) {
            return getComputedStyle(this.elements[0])[property];
        } else {
            each(this.elements, function(element) {
                element.style[property] = value;
            });
        }
        return this;
    };
    aDom.prototype.html = function(html) {
        if (html === undefined) {
            return this.elements[0].innerHTML;
        } else {
            each(this.elements, function(element) {
                element.innerHTML = html;
            });
        }
        return this;
    };
    aDom.prototype.on = function(event, handler) {
        each(this.elements, function(element) {
            element.addEventListener(event, handler);
        });
        return this;
    };
    aDom.prototype.off = function(event, handler) {
        each(this.elements, function(element) {
            element.removeEventListener(event, handler);
        });
        return this;
    };
    global.aDom = global.π = aDom;
}(this));