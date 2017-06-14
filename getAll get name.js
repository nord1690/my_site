function getNameAnlytics( type_ga, set_ga ) {
	var count = ga.getAll().length
	var arr = []
	for( var i=0; count>i; i++ ) {
		var mass = ga.getAll()[i].get( 'name' )
		arr.push(mass)
	}
	for( var j=0; count>j; j++ ) {
		ga( function () {
		var tracker = ga.getByName( arr[j]	)

			if( set_ga != undefined ) {
				tracker.set( type_ga, set_ga )
				console.log( tracker.get( type_ga ) )
			} else {
				console.log( tracker.get( type_ga ) )
			}
		})
	}
}
