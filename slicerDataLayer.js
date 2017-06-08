slicer = function (){
	window.dataLayer = window.dataLayer || []
	var invalidEntries = 0;
	var i2 = [];

	function isObject(obj) {
	  return obj!== undefined && typeof(obj) === 'object' && obj != null;
	}

	function filterByID(item, i) {
	  
	  if (typeof(dataLayer) ==='object' && isObject(item.ecommerce)) {
	  	i2.push(i)
	    return true;
	  } 
	  invalidEntries++;
	  return false; 
	}

	var arrByID = dataLayer.filter(filterByID)

	console.log(arrByID)
	console.log(i2.length)

	return;
}
