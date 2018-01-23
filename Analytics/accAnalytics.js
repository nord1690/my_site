//ACCOUNT MECH Anton

function AccMechAnalytics() {

	var accounts = Analytics.Management.Accounts.list(); //List Accounts

	var Acc = [['Account ID','Account Name', 'Properties ID', 'Properties Name', 'Profiles ID', 'Profiles Name']]; // Headers array 
	

	var ss = SpreadsheetApp.getActiveSheet();
  	ss.clear();
	
	if ( accounts.items && accounts.items.length ) {

		for ( var s=0; s<accounts.items.length; s++ ) {

  			var account = accounts.items[s];
  			var webProperties = Analytics.Management.Webproperties.list( account.id ); //List Resource

  			if ( webProperties.items && webProperties.items.length ) {
  				for ( var r=0; r<webProperties.items.length; r++ ) {
                    
                    var webProperty = webProperties.items[r];
  					var profiles = Analytics.Management.Profiles.list( account.id, webProperty.id ); //List Profiles

  					if ( profiles.items && profiles.items.length ) {
					    for ( var p=0; p<profiles.items.length; p++ ) {
							
							var val = [];
							var profile = profiles.items[p];

							val = [account.id, account.name, webProperty.id, webProperty.name, profile.id, profile.name]
							Acc.push(val)

					    }
					}
  				}
  			}
		}
	}

	if (ss.getLastRow() > 0)   
    ss.getDataRange().clear();
  	ss.getRange(1, 1, Acc.length, 6).setValues(Acc);		
}
