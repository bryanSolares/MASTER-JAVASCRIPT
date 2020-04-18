//WeakSet y WeakMap -> estructuras de datos nuevas proporciondas por ES6
//Solo pueden almacenar referencias débiles

var x = new WeakSet();
x.add({});
var obj = {name:"obj"};
var obj2 = {name:"obj2"};
var obj3 = {name:"obj3"};
x.add(obj);
x.add(obj2);
x.add(obj3);

obj = null;

setInterval(()=>{
    console.log(x)
},1000); 



var xx = new WeakMap();

var key1 = {};
var key2 = {};
xx.set(key1,"bryan");
xx.set(key2,{name:"bryan",apellido:"solares"});

setInterval(()=>{
    console.log(xx)
},1000);