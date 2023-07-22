
function receivesAFunction(callback) {
    callback();
}

receivesAFunction(function () {
    return 4+ 5;});

function returnsANamedFunction () {
    return namedFunction;
}

function namedFunction() {
    return function () {return 2+5};
}

function returnsAnAnonymousFunction () {
    return function(sayHi) {
        return "Hi";
    }
}
