(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        window[name] = factory();
    }
})('typeOf', function () {
    /**
     * @description 判断类型
     * @param {*} whatever - 任何类型的数据都可以
     * */
    function typeOf(whatever) {
        return Object.prototype.toString.call(whatever).slice(8, -1).toLowerCase();
    }

    return typeOf;
});
