
 koansuite( "AboutAsserts", function() {	

  koan("asserts can take a boolean argument", function() {
    assert( true ) // should be true
  } );

  koan("asserts can include a message", function() {
    assert( true, "This should be true")
  } );

//  koan("booleans in asserts can test equality", function() {
//    var v1 = 4
//    var v2 = 4
//    assert(v1 != v2)
//  } );
//
//  koan("sometimes we expect you to fill in the values", function() {
//    assert(2 != 1 + 1)
//  } );
});