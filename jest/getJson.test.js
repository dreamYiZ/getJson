const getJson = require('../getJson');



// json = { "a": [ { "b": "c" }, "d" ], "x": 1} get(json, "a[0].b") == "c"

// get(json, "a[1]") == "d" get(json, "x") == 1
test('请实现一个方法：get(json, "a[0].b")，使其返回值为 c', () => {
  json = { "a": [ { "b": "c" }, "d" ], "x": 1} ;
  expect(getJson(json, 'a[0].b')).toBe('c');
  expect(getJson(json, 'a[1]')).toBe('d');
  expect(getJson(json, 'x')).toBe(1);
});