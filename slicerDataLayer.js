function Slicer (){

	window.dataLayer = window.dataLayer || [] //Проверка dataLayer
	var invalidEntries = 0;
	var i2 = []; //номер dataLayer, где находится impress

	function isObject(obj) { //Функция проверки объекта

		return obj!== undefined && obj!== null && typeof(obj) === 'object';

	}

	function filterByID(item, i) { //функция нахождения всех объектов с impress
	  
		if ( 'ecommerce' in item && isObject(item.ecommerce) && isObject(item.ecommerce.impressions) ) {
	  		
	  		i2.push(i)

	    	return true;
	  	}

	  	invalidEntries++;
	  	return false; 
	}
	
	var arrByID = dataLayer.filter(filterByID) // Фильтруем объекты с imress

	function delImpressions (i2) { //Функция удаления impress

		if(i2.length > 0){
		
			for ( var i = 0; i2.length > i; i++ ){

				delete dataLayer[i2[i]]["ecommerce"].impressions
			}

			return;
		}	
	}

	function splitTo( arr, n) {
 		
 		var plen = Math.ceil(arr.length / n);

  		return arr.reduce( function( p, c, i, a) {
    
	    	if(i%plen === 0) p.push({});
	    	
	    	p[p.length-1][i] = c;
	    	
	    	return p;
	  		},
  		[]);
	}

	function startSlicer(i2) { // Старт работы функций

		if ( arrByID.length > 0 ) {

			for ( var j = 0; arrByID.length > j; j++ ) {

				if ( arrByID[j].ecommerce.impressions.length < 16 ) {
			
					window.dataLayer.push({

						event:"ShopEvent",
						ecommerce : {
							impressions: arrByID[j].ecommerce.impressions
						}

					})
				} else {

					if(isObject(arrByID[j].ecommerce.impressions)){

						var arrSlice = []

						arrSlice = splitTo( arrByID[j].ecommerce.impressions, Math.ceil(arrByID[j].ecommerce.impressions.length/15))

						for ( var t = 0; arrSlice.length > t; t++ ) { 

							window.dataLayer.push({

								event:"ShopEvent",
								ecommerce : {
									impressions: arrSlice[t] 
								}
							})

							console.log(arrSlice[t])
						}
					}	
				}
			}		

			return delImpressions(i2);
		}	
	}
	
	return startSlicer(i2);
}
