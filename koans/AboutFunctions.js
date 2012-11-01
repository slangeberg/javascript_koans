koansuite("About Functions", function() {

    koan("Function Declarations", function() {

        function add(a, b) {
            return a + b;
        }

        var subtract = function( c, d ) {
            return c - d;
        }

        assert( add(1, 2) === __, "How much?");

        assert( subtract(3, 4) === __, "Variables can reference functions");
    });

    koan( "Internal Variables Override Outer. Right?", function () {
        
        var message = "Outer";

        function getMessage() {
            return message;
        }

        function overrideMessage() {
            var message = "Inner";
            return message;
        }

        assert( getMessage() === __, "Can get message");

        assert( overrideMessage() === __, "Read override msg");

        assert( message === __, "What's the message?" );
    });
    /*
    koan("should have lexical scoping", function () {

        var variable = "top-level";

        function parentfunction() {
            var variable = "local";
            function childfunction() {
                return variable;
            }
            return childfunction();
        }
        assert(parentfunction()).toBe(FILL_ME_IN);
    });

    koan("should use lexical scoping to synthesise functions", function () {

        function makeIncreaseByFunction(increaseByAmount) {
            var increaseByFunction = function increaseBy(numberToIncrease) {
                return numberToIncrease + increaseByAmount;
            };
            return increaseByFunction;
        }

        var increaseBy3 = makeIncreaseByFunction(3);
        var increaseBy5 = makeIncreaseByFunction(5);

        assert(increaseBy3(10) + increaseBy5(10)).toBe(FILL_ME_IN);
    });

    koan("should allow extra function arguments", function () {

        function returnFirstArg(firstArg) {
            return firstArg;
        }

        assert(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

        function returnSecondArg(firstArg, secondArg) {
            return secondArg;
        }

        assert(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);

        function returnAllArgs() {
            var argsArray = [];
            for (var i = 0; i < arguments.length; i += 1) {
                argsArray.push(arguments[i]);
            }
            return argsArray.join(",");
        }

        assert(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
    });

    koan("should pass functions as values", function () {

        var appendRules = function (name) {
            return name + " rules!";
        };

        var appendDoubleRules = function (name) {
            return name + " totally rules!";
        };

        var praiseSinger = { givePraise: appendRules };
        assert(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

        praiseSinger.givePraise = appendDoubleRules;
        assert(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);

    });

    koan("should use function body as a string", function () {
        var add = new Function("a", "b", "return a + b;");
        assert(add(1, 2)).toBe(FILL_ME_IN);

        var multiply = function (a, b) {
            //An internal comment
            return a * b;
        };
        assert(multiply.toString()).toBe(FILL_ME_IN);
    });
    */
});
