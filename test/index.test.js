const typeOf = require('../dist/index.min');

test(`typeOf(''); // 'string'`, () => {
    expect(typeOf('')).toEqual('string');
});

test(`typeOf(0); // 'number'`, () => {
    expect(typeOf(0)).toEqual('number');
});

test(`typeOf(true); // 'boolean'`, () => {
    expect(typeOf(true)).toEqual('boolean');
});

test(`typeOf(null); // 'null'`, () => {
    expect(typeOf(null)).toEqual('null');
});

test(`typeOf(undefined); // 'undefined'`, () => {
    expect(typeOf(undefined)).toEqual('undefined');
});

test(`typeOf([]); // 'array'`, () => {
    expect(typeOf([])).toEqual('array');
});

test(`typeOf({}); // 'object'`, () => {
    expect(typeOf({})).toEqual('object');
});
