
koansuite( "About Equality", function() {

    // Replace any __ with your answer

    koan( "Numeric Equality", function() {
        assert(3 + __ ===  7, 'Think: think!!');
    });

    koan("String Equality", function() {
        assert( "3" + "_" === "37", "concatenate the strings");
    });

    koan("Equality without type coercion", function() {
        assert(3 === __, 'what is exactly equal to 3?');
    });

    koan("Equality with type coercion", function() {
        assert( 3 == "_", 'what string is equal to 3, with type coercion?');
    });

    koan("String Literals", function() {
        assert( "frankenstein" === '____', "quote types are interchangable, but must match.");
    });
} );