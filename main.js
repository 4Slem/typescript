var m = [1,2,3,4, 'sdfd'];

m.s = function() {
    for(x in this) {
       console.log( this[x] );
    }
}

Object.defineProperty(m, "s", {
    enumerable: false
});


m.s();


var m = {
    ["0"]: 1,
    ["1"]: 2,
    ["2"]: 3,
    ["3"]: 4,
    [Symbol.iterator]: function() {
        var i = 0;
    
        return {
            next: () => {
                var done = (this[i] !=undefined) ? false : true;
                var value = !done ? this[i++] : undefined;
                return {
                    done: done,
                    value: value
                }
            }
        }
    }
}

m[4] = {name: 'Alex'};

for(x of m) {
    console.log(x);
}


for(x in m) {
    console.log(x)
}


function *decorator () {
    yield 1;
    console.log('1d');
    yield 2;
    console.log('2d');
    yield 3;
    console.log('3d');
    yield 4;
    console.log('4d');
}


var dd = decorator();

for(a of dd) {
    console.log(a)
}




var a = {
    ["0"]: 4,
    ["1"]: 2,
    [Symbol.iterator]() {
        var i = 0;
        return {
            next: () => {
                var done = (this[i] != undefined) ? false : true;
                var value = !done ? this[i++] : undefined;
                return {
                    value: value,
                    done: done
                }
            }
        }
    }
}



var mas = [1,2,3];
var mas2 = [...a, 4,5,6];

console.log(mas2)


function *decorator () {
    console.log('Work')
    var data = yield;

    var elem = document.getElementById('text');
    elem.innerHTML = data;
}

var d = decorator();
d.next();



setTimeout(function() {
    d.next('Hello world');
}, 3000)
