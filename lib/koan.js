var __ = "Fill me in"

var assert = function( booleanvalue, msg ) {
	if( booleanvalue !== true ) {
		var error = "Keep trying" + (msg ? ": " + msg : "");
		throw error;
	}
}
var assertNull = function( value, msg ) {
    return assert( value === undefined || value === null, "Expected null " + msg );
}
var assertNotNull = function( value, msg ) {
    return assert( value !== undefined && value !== null, "Expected not null " + msg );
}

var koan = function( msg, koanfunction ) {
	if( koanfunction ) {
		var _msg = "koan: " + msg;
		console.log( _msg );
		koanprint( _msg );
		try {
			koanfunction()
		} catch( err ) {
			if ( err.toLowerCase().indexOf("assert") > -1 ) {
				_msg = "Failed assertion: " + msg
                    + " - "
                    + err.replace("AssertionError: ", "")
				console.error( _msg ); 
				koanprinterror( _msg )
			} else {
				_msg = msg + " - Threw Unexpected Error: " + err
				console.error( _msg );
				koanprinterror( _msg )
			}
		}
	}
}

var koansuite = function( msg, suitefunction ) {
	if( suitefunction ) {
		var _msg =  "koan suite: " + msg
		console.log( _msg )
		koanprint( _msg )
		try {
			suitefunction();
		} catch( err ) {
			_msg = "Caught error: " + err + " - msg: " + msg
			console.error( _msg )
			koanprinterror( _msg )
		}
	}
}

var jasmineAssert = function( booleanvalue ) {
    // jasmine way
    expect(booleanvalue).toBe(true);
}

//override with jasmine version(s)
//assert = jasmineAssert;
koansuite = describe;
koan = it;

function koanprinterror( err ) {
	koanprint( err, true );
}

function koanprint( msg, isError ) {
	console.debug("koanprint() - msg:", msg )
	if ( msg ) {
		var koans = document.getElementById("koans")
		console.log( "koans: ", koans )
		if ( koans ) {
			var p = "<p" + (isError ? " class='error'" : "") + ">";
			koans.innerHTML += p + msg + "</p>";
		}
	}
}