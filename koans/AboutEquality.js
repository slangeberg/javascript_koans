
koansuite( "AboutEquality", function() {

    koan("numeric equality", function() {
        assert(3 + __ ===  7, 'hmmmm?');
    });

    koan("string equality", function() {
        assert( "3" + __ == "37", "concatenate the strings");
    });

    koan("equality without type coercion", function() {
        assert(3 === __, 'what is exactly equal to 3?');
    });

    koan("equality with type coercion", function() {
        assert( 3 == "__", 'what string is equal to 3, with type coercion?');
    });

    koan("string literals", function() {
        assert( "frankenstein" === '__', "quote types are interchangable, but must match.");
    });
} );