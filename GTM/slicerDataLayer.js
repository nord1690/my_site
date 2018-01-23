function Slicer (){

	window.dataLayer = window.dataLayer || [] //Проверка dataLayer
	var arrByID = []
	var i2 = []; //номер dataLayer, где находится impress
	var arrSlice = []

	function isObject( obj ) { //Функция проверки объекта
		return obj!== undefined && obj!== null && typeof(obj) === 'object';
	}

	function filterByID( item, i ) 
	{ //функция нахождения всех объектов с impress 
		if ( 'ecommerce' in item && isObject( item.ecommerce ) && isObject( item.ecommerce.impressions ) ) {  		
			i2.push( i )
			return true;
		}
		return false; 
	}

	function delImpressions( i2 ) //Функция удаления impress
	{
		if(i2.length > 0)
		{
			for ( var i = 0; i2.length > i; i++ )
			{
				delete dataLayer[i2[i]]["ecommerce"].impressions
			}
			return;
		}	
	}

	function splitTo( arr, chunk)
	{ //делит на одинаковые части
		
		var plen = Math.ceil( arr.length / chunk );
		
		var i, j, tmp = [];
  		for ( i = 0, j = arr.length; i < j; i += chunk ) {
    		tmp.push( arr.slice( i, i + chunk ) );
  		}
  		return tmp;	

	}

	function startSlicer( i2 ) { // Старт работы функций
		arrByID = dataLayer.filter(filterByID) // Фильтруем объекты с imress
		if ( arrByID.length > 0 ) 
		{
			for ( var i = 0; arrByID.length > i; i++ ) 
			{
				if ( arrByID[i].ecommerce.impressions.length < 16 ) 
				{
					console.log("All_OK")
				} else 
				{
					if( isObject( arrByID[i].ecommerce.impressions ) ) 
					{
						arrSlice = splitTo( arrByID[i].ecommerce.impressions, arrByID[i].ecommerce.impressions.length / ( Math.ceil( arrByID[i].ecommerce.impressions.length/15 ) ) )
						for ( var j = 0; arrSlice.length > j; j++ ) 
						{ 
							window.dataLayer.push
							({
								event:"ShopEvent",
								ecommerce : 
								{
									impressions: arrSlice[j]
								}
							})
							console.log(arrSlice[j])
						}

						delImpressions(i2);
					}	
				}
			}		
		}	
	}
	return startSlicer(i2);
}
