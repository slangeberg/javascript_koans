
koansuite( "About Function Scope", function() {

    // Replace any instance of __ that you find

    koan( "Outer and inner scopes", function(){

        var outer = function() {

            var george = "monkey";

            var inner = function() {
                george = "fish"
                return george;
            }
            return inner;
        }

        assert( (outer.george === undefined) === __, "George?")

        assert( outer.hasOwnProperty("george") === __, "George, that you?")

        assert( (outer().george === __) === true, "George, where are you?")

        assert( outer().hasOwnProperty("george") === __, "George, are you in there?")

        assert( (typeof(outer()) === "function") === __, "What are you?")


        var inner = outer();

        assert( (inner.george === undefined) === __, "George?")

        assert( inner.hasOwnProperty("george") === __, "George, that you?")

        assert( inner().hasOwnProperty("george") === __, "Did I find you George?")

        assert( (typeof(inner()) === __ ) === true, "What's inside?")

        assert( inner() === __, "What happened to you?")
    });
} );