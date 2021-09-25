JSON.stringify({}); //-> '{}'
JSON.stringify(3.14); //->'3.14'
JSON.stringify("abc"); //-> '"abc"'
JSON.stringify(true); //-> 'true'
JSON.stringify([2,4,null]); //-> '[2,4,null]'
JSON.stringify({x:1, y:2}); //-> '{"x":1,"y":2}'

JSON.stringify({x:1, y:2, z:3},["x","z"]); //-> '{"x":1, "z":3}'

JSON.stringify({x:1, y:2}, null, '\t');
// '{
//   "x":1,
//   "y":2
//  }' 