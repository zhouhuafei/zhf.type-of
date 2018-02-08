# 判断数据类型
* 0依赖，支持，amd，commonjs，browser
```
const typeOf = require('zhf.type-of');
typeOf(''); // 'string'
typeOf(0); // 'number'
typeOf(true); // 'boolean'
typeOf(null); // 'null'
typeOf(undefined); // 'undefined'
typeOf([]); // 'array'
typeOf({}); // 'object'
```
