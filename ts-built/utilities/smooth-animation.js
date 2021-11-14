"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Adapté de https://codepen.io/ReGGae/pen/pxMJLW
var SmoothAnimation = /** @class */ (function () {
    function SmoothAnimation(elementId) {
        this.bindMethods();
        this.data = {
            ease: 0.1,
            current: 0,
            last: 0,
            rounded: 0,
        };
        this.dom = {
            el: document.querySelectorAll(elementId),
        };
        this.rAF = null;
        this.init();
    }
    SmoothAnimation.prototype.bindMethods = function () {
        var _this = this;
        ["scroll", "run"].forEach(function (fn) { return (_this[fn] = _this[fn].bind(_this)); });
    };
    SmoothAnimation.prototype.scroll = function () {
        this.data.current = window.scrollY;
    };
    SmoothAnimation.prototype.run = function () {
        this.data.last += (this.data.current - this.data.last) * this.data.ease;
        this.data.rounded = Math.round(this.data.last * 100) / 100;
        //const diff = this.data.current - this.data.rounded;
        //const acc = diff / window.innerHeight
        //const velo =+ acc
        //const skew = velo * 7.5
        var angle = this.data.rounded / 7.5;
        if (this.dom.el)
            this.dom.el.forEach(function (el) {
                el.style.transform = "rotate3d(0, 0, 1, " + angle + "deg)";
            });
        this.requestAnimationFrame();
    };
    SmoothAnimation.prototype.on = function () {
        this.addEvents();
        this.requestAnimationFrame();
    };
    SmoothAnimation.prototype.off = function () {
        this.cancelAnimationFrame();
        this.removeEvents();
    };
    SmoothAnimation.prototype.requestAnimationFrame = function () {
        this.rAF = requestAnimationFrame(this.run);
    };
    SmoothAnimation.prototype.cancelAnimationFrame = function () {
        cancelAnimationFrame(this.rAF);
    };
    SmoothAnimation.prototype.destroy = function () {
        this.data = null;
        this.removeEvents();
        this.cancelAnimationFrame();
    };
    SmoothAnimation.prototype.addEvents = function () {
        window.addEventListener("scroll", this.scroll, { passive: true });
    };
    SmoothAnimation.prototype.removeEvents = function () {
        window.removeEventListener("scroll", this.scroll);
    };
    SmoothAnimation.prototype.init = function () {
        this.on();
    };
    return SmoothAnimation;
}());
exports.default = SmoothAnimation;
//# sourceMappingURL=smooth-animation.js.map