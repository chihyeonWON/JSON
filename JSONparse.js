JSON.parse('{}'); // -> {}
JSON.parse('3.14'); //-> 3.14
JSON.parse('"abc"'); //-> "abc"
JSON.parse('true'); //->true
JSON.parse('[2,4,null]'); //-> [2,4,null]
JSON.parse('{"x":1,"y":2}'); //-> {x:1,y:2}
var o = {name:"Tom", age:17, marriage:false, data: [2, 5, null]};
var s = JSON.stringify(o);
//->'{"name":"Tom","age":17,"marriage":false,"data":[2,5,null]}'
var p = JSON.parse(s);
// -> {name:"Tom", age:17, marriage:false, data:[2,5,null]}