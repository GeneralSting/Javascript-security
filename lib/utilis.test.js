// npm install mocha --saveDev
const {merge} = require('./utils');
const assert = require('assert');

// describe('merge', function() {
//     it('prevents prototype pollution', function() {
//         const malicious = JSON.parse('{"__proto__":{"injected":0}}');
//         merge({}, malicious);

//         const testObj = {}
//         assert.strictEqual(testObj.injected, undefined);
//     })
// })


//this causes the error on website, unable to use it
//after code is inserted run: ./node_modules/.bin/mocha lib/utilis.test.js